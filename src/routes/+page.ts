import type { PageLoad } from "./$types";
import { browser } from "$app/environment";
import { fetchReleases } from "$lib/github-api";

export const load: PageLoad = async () => {
  if (!browser) {
    return { version: "latest", releases: [] };
  }
  const { releases, latestVersion } = await fetchReleases();
  return { version: latestVersion, releases };
};
