export type GitHubRelease = {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
};

type CachedReleaseData = {
  releases: GitHubRelease[];
  timestamp: number;
  latestVersion: string;
};

const CACHE_KEY = "tcg-lightning-releases";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const GITHUB_API_URL =
  "https://api.github.com/repos/dimfred/tcg-lightning/releases";

function parseVersion(tagName: string): string {
  // Remove 'v' prefix if present (e.g., "v0.1.17" -> "0.1.17")
  return tagName.startsWith("v") ? tagName.slice(1) : tagName;
}

function getCachedData(): CachedReleaseData | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data = JSON.parse(cached) as CachedReleaseData;
    const isExpired = Date.now() - data.timestamp > CACHE_DURATION;

    return isExpired ? null : data;
  } catch {
    return null;
  }
}

function setCachedData(data: CachedReleaseData): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // localStorage might be full or disabled, silently fail
  }
}

export async function fetchReleases(): Promise<{
  releases: GitHubRelease[];
  latestVersion: string;
}> {
  // Check cache first
  const cached = getCachedData();
  if (cached) {
    return {
      releases: cached.releases,
      latestVersion: cached.latestVersion,
    };
  }

  // Fetch from GitHub API
  try {
    const response = await fetch(`${GITHUB_API_URL}?per_page=10`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const releases = (await response.json()) as GitHubRelease[];

    const latestVersion =
      releases.length > 0 ? parseVersion(releases[0].tag_name) : "0.1.17";

    // Cache the result
    const cacheData: CachedReleaseData = {
      releases,
      timestamp: Date.now(),
      latestVersion,
    };
    setCachedData(cacheData);

    return { releases, latestVersion };
  } catch (error) {
    console.error("Failed to fetch releases:", error);

    // Return fallback data if fetch fails
    return {
      releases: [],
      latestVersion: "0.1.17",
    };
  }
}
