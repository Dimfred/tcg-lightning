import type { PageServerLoad } from "./$types";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

function markdownToHtml(content: string): string {
  return content
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith("<")) return match;
      return `<p>${match}</p>`;
    });
}

export const load: PageServerLoad = async () => {
  // Get the latest version from releases directory
  let version = "0.1.13"; // Default fallback
  let releaseNotes = "";
  const allReleaseNotes: Array<{ version: string; content: string }> = [];

  try {
    const releasesDir = "releases";
    const files = await readdir(releasesDir);

    // Extract versions from filenames like tcg-lightning_0.1.13_x64-setup.exe
    const versions = files
      .filter(
        (f) =>
          f.endsWith(".exe") || f.endsWith(".AppImage") || f.endsWith(".deb"),
      )
      .map((f) => {
        const match = f.match(/tcg-lightning[_-](\d+\.\d+\.\d+)/);
        return match ? match[1] : null;
      })
      .filter((v): v is string => v !== null)
      .sort((a, b) => {
        const [aMajor, aMinor, aPatch] = a.split(".").map(Number);
        const [bMajor, bMinor, bPatch] = b.split(".").map(Number);
        if (aMajor !== bMajor) return bMajor - aMajor;
        if (aMinor !== bMinor) return bMinor - aMinor;
        return bPatch - aPatch;
      });

    if (versions.length > 0) {
      version = versions[0];
    }
  } catch (e) {
    // Use default version if releases directory doesn't exist
  }

  // Read the latest release notes
  try {
    const notesPath = join("notes", `${version}.md`);
    const content = await readFile(notesPath, "utf-8");
    if (content.trim()) {
      releaseNotes = markdownToHtml(content);
    }
  } catch (e) {
    // No release notes available
  }

  // Read all release notes from the notes directory
  try {
    const notesDir = "notes";
    const noteFiles = await readdir(notesDir);

    // Get all .md files and extract versions
    const noteVersions = noteFiles
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(".md", ""))
      .sort((a, b) => {
        const [aMajor, aMinor, aPatch] = a.split(".").map(Number);
        const [bMajor, bMinor, bPatch] = b.split(".").map(Number);
        if (aMajor !== bMajor) return bMajor - aMajor;
        if (aMinor !== bMinor) return bMinor - aMinor;
        return bPatch - aPatch;
      });

    // Read content for each version
    for (const ver of noteVersions) {
      try {
        const notesPath = join(notesDir, `${ver}.md`);
        const content = await readFile(notesPath, "utf-8");
        if (content.trim()) {
          allReleaseNotes.push({
            version: ver,
            content: markdownToHtml(content),
          });
        }
      } catch (e) {
        // Skip if file can't be read
      }
    }
  } catch (e) {
    // Notes directory doesn't exist
  }

  return {
    version,
    releaseNotes,
    allReleaseNotes,
  };
};
