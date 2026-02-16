import type { PageServerLoad } from "./$types";

type GitHubRelease = {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
};

type CachedData = {
  releases: GitHubRelease[];
  latestVersion: string;
  timestamp: number;
};

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes
const GITHUB_API_URL =
  "https://api.github.com/repos/dimfred/tcg-lightning/releases";

let cache: CachedData | null = null;

function parseVersion(tagName: string): string {
  return tagName.startsWith("v") ? tagName.slice(1) : tagName;
}

async function fetchReleases(): Promise<{
  releases: GitHubRelease[];
  latestVersion: string;
}> {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return {
      releases: cache.releases,
      latestVersion: cache.latestVersion,
    };
  }

  try {
    const response = await fetch(`${GITHUB_API_URL}?per_page=10`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "tcg-lightning-website",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const allReleases = (await response.json()) as GitHubRelease[];
    const releases = allReleases.filter((release) => !release.prerelease);

    const latestVersion =
      releases.length > 0 ? parseVersion(releases[0].tag_name) : "latest";

    // Update cache
    cache = {
      releases,
      latestVersion,
      timestamp: Date.now(),
    };

    return { releases, latestVersion };
  } catch (error) {
    console.error("Failed to fetch releases:", error);

    // Return cached data if available, even if expired
    if (cache) {
      return {
        releases: cache.releases,
        latestVersion: cache.latestVersion,
      };
    }

    return {
      releases: [],
      latestVersion: "latest",
    };
  }
}

export const load: PageServerLoad = async () => {
  const { releases, latestVersion } = await fetchReleases();
  return { version: latestVersion, releases };
};
