<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import {
    Download,
    Monitor,
    Server,
    Apple,
    ExternalLink,
    Laptop,
  } from "lucide-svelte";
  import type { GitHubRelease } from "$lib/github-api";
  import { marked } from "marked";

  type Props = {
    version: string;
    releases: GitHubRelease[];
  };

  let { version, releases }: Props = $props();

  // Parse version from tag (remove 'v' prefix)
  function parseVersion(tagName: string): string {
    return tagName.startsWith("v") ? tagName.slice(1) : tagName;
  }

  // Convert markdown to HTML and remove the first h1 (version number)
  function renderMarkdown(markdown: string | undefined | null): string {
    if (!markdown) return "";
    let html = marked(markdown) as string;
    // Remove first h1 tag (version number like "# 0.1.17")
    html = html.replace(/<h1[^>]*>.*?<\/h1>/, "");
    return html;
  }

  // Link to the latest release page - GitHub will redirect to the actual download
  const latestReleasePage =
    "https://github.com/dimfred/tcg-lightning/releases/latest";

  // Get latest release notes (using derived state)
  let latestRelease = $derived(releases?.[0]);
  let releaseNotesHtml = $derived(renderMarkdown(latestRelease?.body));
</script>

<section id="download" class="py-16 md:py-24 bg-secondary/30">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Download TCG Lightning
        <Badge variant="secondary" class="ml-2 align-middle">v{version}</Badge>
      </h2>
      <p class="text-lg text-muted-foreground">
        A native desktop application for Windows and Linux
      </p>
    </div>

    <!-- Mobile notice -->
    <div class="md:hidden">
      <Card.Root class="max-w-md mx-auto text-center">
        <Card.Header>
          <div class="flex justify-center mb-4">
            <Laptop class="size-16 text-primary" />
          </div>
          <Card.Title class="text-xl">Desktop App Only</Card.Title>
        </Card.Header>
        <Card.Content>
          <p class="text-muted-foreground mb-4">
            TCG Lightning is a desktop application designed for Windows and
            Linux computers.
          </p>
          <p class="text-sm text-muted-foreground">
            Visit this page on your PC to download and install the app.
          </p>
        </Card.Content>
      </Card.Root>
    </div>

    <!-- Desktop download cards -->
    <div
      class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      <!-- Windows -->
      <Card.Root class="hover:border-primary/50 transition-all duration-200">
        <Card.Header class="text-center">
          <div class="flex justify-center mb-4">
            <Monitor class="size-12 text-primary" />
          </div>
          <Card.Title class="text-xl">Windows</Card.Title>
          <Badge variant="secondary">v{version}</Badge>
        </Card.Header>
        <Card.Content class="space-y-3">
          <Button
            class="w-full"
            size="lg"
            href={latestReleasePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download class="size-4" />
            Download .exe
          </Button>
        </Card.Content>
      </Card.Root>

      <!-- Linux -->
      <Card.Root class="hover:border-primary/50 transition-all duration-200">
        <Card.Header class="text-center">
          <div class="flex justify-center mb-4">
            <Server class="size-12 text-primary" />
          </div>
          <Card.Title class="text-xl">Linux</Card.Title>
          <Badge variant="secondary">v{version}</Badge>
        </Card.Header>
        <Card.Content class="space-y-3">
          <Button
            class="w-full"
            size="lg"
            href={latestReleasePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download class="size-4" />
            Download AppImage
          </Button>
          <Button
            class="w-full"
            variant="outline"
            href={latestReleasePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download class="size-4" />
            Download .deb
          </Button>
          <div class="p-3 bg-muted rounded-md font-mono text-sm text-center">
            paru -Sy tcg-lightning-bin
          </div>
        </Card.Content>
      </Card.Root>

      <!-- macOS -->
      <Card.Root class="opacity-60">
        <Card.Header class="text-center">
          <div class="flex justify-center mb-4">
            <Apple class="size-12 text-muted-foreground" />
          </div>
          <Card.Title class="text-xl">macOS</Card.Title>
          <Badge variant="secondary">Coming Soon</Badge>
        </Card.Header>
        <Card.Content class="space-y-3">
          <Button class="w-full" disabled>Not Available</Button>
        </Card.Content>
      </Card.Root>
    </div>

    <!-- Release Notes (desktop only) -->
    {#if latestRelease}
      <div class="hidden md:block mt-12 max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold mb-4">Latest Release - v{version}</h3>
        <Card.Root>
          <Card.Content class="markdown-content">
            {@html releaseNotesHtml}
          </Card.Content>
        </Card.Root>
      </div>
    {/if}

    <!-- All Release Notes (desktop only) - Skip first release as it's shown above -->
    {#if releases.length > 1}
      <div class="hidden md:block mt-12 max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold mb-6">Release History</h3>
        <div class="space-y-6">
          {#each releases.slice(1) as release}
            <Card.Root>
              <Card.Header>
                <Card.Title class="flex items-center gap-2">
                  Version {parseVersion(release.tag_name)}
                </Card.Title>
              </Card.Header>
              <Card.Content class="markdown-content">
                {@html renderMarkdown(release.body)}
              </Card.Content>
            </Card.Root>
          {/each}
        </div>
        <a
          href="https://github.com/dimfred/tcg-lightning/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 mt-6 text-primary hover:underline"
        >
          View releases on GitHub
          <ExternalLink class="size-4" />
        </a>
      </div>
    {/if}
  </div>
</section>
