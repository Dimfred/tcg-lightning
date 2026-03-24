<script lang="ts">
  import { onMount, tick } from "svelte";
  import { page } from "$app/stores";
  import { asset, resolve } from "$app/paths";
  import { goto } from "$app/navigation";
  import { throttle } from "$lib/utils";
  import { Menu, X } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import DiscordIcon from "$lib/components/icons/DiscordIcon.svelte";

  let activeSection = $state("hero");
  let mobileMenuOpen = $state(false);
  const sections = ["hero", "about", "faq", "download"];

  // Check if we're on the home page
  let isHomePage = $derived(
    $page.url.pathname === resolve("/") || $page.url.pathname === "/",
  );

  async function navigateToSection(e: MouseEvent, id: string) {
    e.preventDefault();
    mobileMenuOpen = false;
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll to section
      await goto(resolve("/"));
      await tick();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }

  function updateActiveSection() {
    if (!isHomePage) return;

    for (const id of sections) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection = id;
        break;
      }
    }
  }

  onMount(() => {
    const throttledUpdate = throttle(updateActiveSection, 100);
    window.addEventListener("scroll", throttledUpdate);
    updateActiveSection();
    return () => window.removeEventListener("scroll", throttledUpdate);
  });

  $effect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
</script>

<header class="sticky top-0 z-50 h-14 border-b bg-background border-border">
  <nav class="container mx-auto px-4 h-full flex items-center justify-between">
    <a href={resolve("/")} class="flex items-center">
      <img
        src={asset("/logo_full-sm.webp")}
        alt="TCG Lightning"
        width="480"
        height="118"
        class="h-8 w-auto"
      />
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-6">
      <a
        href={resolve("/#hero")}
        onclick={(e) => navigateToSection(e, "hero")}
        class="text-sm font-medium transition-colors hover:text-brand {isHomePage &&
        activeSection === 'hero'
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        Home
      </a>
      <a
        href={resolve("/#about")}
        onclick={(e) => navigateToSection(e, "about")}
        class="text-sm font-medium transition-colors hover:text-brand {isHomePage &&
        activeSection === 'about'
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        About
      </a>
      <a
        href={resolve("/#faq")}
        onclick={(e) => navigateToSection(e, "faq")}
        class="text-sm font-medium transition-colors hover:text-brand {isHomePage &&
        activeSection === 'faq'
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        FAQ
      </a>
      <a
        href={resolve("/#download")}
        onclick={(e) => navigateToSection(e, "download")}
        class="text-sm font-medium transition-colors hover:text-brand {isHomePage &&
        activeSection === 'download'
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        Download
      </a>
      <a
        href={resolve("/wiki")}
        class="text-sm font-medium transition-colors hover:text-brand {$page.url.pathname.includes(
          '/wiki',
        )
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        Wiki
      </a>
      <a
        href={resolve("/blog")}
        class="text-sm font-medium transition-colors hover:text-brand {$page.url.pathname.includes(
          '/blog',
        )
          ? 'text-brand'
          : 'text-muted-foreground'}"
      >
        Blog
      </a>
      <a
        href="https://discord.gg/vGpqEcxzRG"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors text-muted-foreground hover:text-brand"
      >
        <DiscordIcon />
        Discord
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <Button
      variant="ghost"
      size="icon"
      class="md:hidden"
      onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      {#if mobileMenuOpen}
        <X class="size-5" />
      {:else}
        <Menu class="size-5" />
      {/if}
    </Button>
  </nav>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <!-- Backdrop to close menu when clicking outside -->
    <button
      class="md:hidden fixed inset-0 top-14 z-30 bg-black/50"
      onclick={() => (mobileMenuOpen = false)}
      aria-label="Close menu"
    ></button>

    <!-- Menu panel -->
    <div
      class="md:hidden fixed top-14 right-0 z-40 w-64 h-[calc(100vh-3.5rem)] bg-background border-l border-border shadow-xl"
    >
      <nav class="p-4 flex flex-col gap-2">
        <a
          href={resolve("/#hero")}
          onclick={(e) => navigateToSection(e, "hero")}
          class="text-lg font-medium py-3 px-4 block hover:bg-secondary rounded-md transition-colors"
        >
          Home
        </a>
        <a
          href={resolve("/#about")}
          onclick={(e) => navigateToSection(e, "about")}
          class="text-lg font-medium py-3 px-4 block hover:bg-secondary rounded-md transition-colors"
        >
          About
        </a>
        <a
          href={resolve("/#faq")}
          onclick={(e) => navigateToSection(e, "faq")}
          class="text-lg font-medium py-3 px-4 block hover:bg-secondary rounded-md transition-colors"
        >
          FAQ
        </a>
        <a
          href={resolve("/#download")}
          onclick={(e) => navigateToSection(e, "download")}
          class="text-lg font-medium py-3 px-4 block hover:bg-secondary rounded-md transition-colors"
        >
          Download
        </a>
        <a
          href={resolve("/wiki")}
          class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors"
          onclick={() => (mobileMenuOpen = false)}
        >
          Wiki
        </a>
        <a
          href={resolve("/blog")}
          class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors"
          onclick={() => (mobileMenuOpen = false)}
        >
          Blog
        </a>
        <a
          href="https://discord.gg/vGpqEcxzRG"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-brand"
          onclick={() => (mobileMenuOpen = false)}
        >
          <DiscordIcon class="size-5" />
          Join Discord
        </a>
      </nav>
    </div>
  {/if}
</header>
