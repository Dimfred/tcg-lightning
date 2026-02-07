import type { PageLoad } from "./$types";
import { fetchReleases } from "$lib/github-api";

export const load: PageLoad = async () => {
  const { releases, latestVersion } = await fetchReleases();

  return {
    version: latestVersion,
    releases,
  };
};

// Enable client-side rendering
export const ssr = false;
