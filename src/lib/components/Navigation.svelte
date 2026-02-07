<script lang="ts">
  import { onMount, tick } from "svelte";
  import { page } from "$app/stores";
  import { asset, resolve } from "$app/paths";
  import { goto } from "$app/navigation";
  import { throttle } from "$lib/utils";
  import { Menu, X } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";

  let activeSection = $state("hero");
  let mobileMenuOpen = $state(false);
  let scrolled = $state(false);

  const sections = ["hero", "about", "download"];

  // Check if we're on the home page
  let isHomePage = $derived(
    $page.url.pathname === resolve("/") ||
      $page.url.pathname === resolve("") ||
      $page.url.pathname === "/",
  );

  async function navigateToSection(id: string) {
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
    // Always update scrolled state for proper header background
    scrolled = window.scrollY > 20;

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

<header
  class="sticky top-0 z-50 h-14 border-b transition-all duration-200 {scrolled
    ? 'bg-background border-border'
    : 'bg-transparent border-transparent'}"
>
  <nav class="container mx-auto px-4 h-full flex items-center justify-between">
    <a href={resolve("/")} class="flex items-center">
      <img src={asset("/logo_full.png")} alt="TCG Lightning" class="h-8 w-auto" />
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-6">
      <button
        onclick={() => navigateToSection("hero")}
        class="text-sm font-medium transition-colors hover:text-primary cursor-pointer {isHomePage &&
        activeSection === 'hero'
          ? 'text-primary'
          : 'text-muted-foreground'}"
      >
        Home
      </button>
      <button
        onclick={() => navigateToSection("about")}
        class="text-sm font-medium transition-colors hover:text-primary cursor-pointer {isHomePage &&
        activeSection === 'about'
          ? 'text-primary'
          : 'text-muted-foreground'}"
      >
        About
      </button>
      <button
        onclick={() => navigateToSection("download")}
        class="text-sm font-medium transition-colors hover:text-primary cursor-pointer {isHomePage &&
        activeSection === 'download'
          ? 'text-primary'
          : 'text-muted-foreground'}"
      >
        Download
      </button>
      <a
        href={resolve("/wiki")}
        class="text-sm font-medium transition-colors hover:text-primary {$page.url.pathname.includes(
          '/wiki',
        )
          ? 'text-primary'
          : 'text-muted-foreground'}"
      >
        Wiki
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
        <button
          onclick={() => navigateToSection("hero")}
          class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer"
        >
          Home
        </button>
        <button
          onclick={() => navigateToSection("about")}
          class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer"
        >
          About
        </button>
        <button
          onclick={() => navigateToSection("download")}
          class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer"
        >
          Download
        </button>
        <a
          href={resolve("/wiki")}
          class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors"
          onclick={() => (mobileMenuOpen = false)}
        >
          Wiki
        </a>
      </nav>
    </div>
  {/if}
</header>
