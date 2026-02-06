<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import {
    Menu,
    X,
    BookOpen,
    Settings,
    Search,
    HelpCircle,
    ChevronRight,
  } from "lucide-svelte";

  let sidebarOpen = $state(false);

  const navItems = [
    {
      title: "Getting Started",
      items: [
        { label: "Installation", icon: BookOpen },
        { label: "First Deck", icon: ChevronRight },
      ],
    },
    {
      title: "Features",
      items: [
        { label: "LLM Setup", icon: Settings },
        { label: "Search Syntax", icon: Search },
      ],
    },
    {
      title: "Help",
      items: [{ label: "FAQ", icon: HelpCircle }],
    },
  ];
</script>

<svelte:head>
  <title>Wiki - TCG Lightning</title>
</svelte:head>

<div class="flex min-h-[calc(100vh-3.5rem)]">
  <!-- Mobile sidebar toggle -->
  <!-- <Button
    variant="ghost"
    size="icon"
    class="fixed bottom-4 right-4 z-50 lg:hidden shadow-lg bg-card border"
    onclick={() => (sidebarOpen = !sidebarOpen)}
    aria-label="Toggle sidebar"
  >
    {#if sidebarOpen}
      <X class="size-5" />
    {:else}
      <Menu class="size-5" />
    {/if}
  </Button> -->

  <!-- Sidebar -->
  <!-- <aside
    class="fixed lg:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-secondary/20 overflow-y-auto transition-transform duration-200 {sidebarOpen
      ? 'translate-x-0'
      : '-translate-x-full lg:translate-x-0'}"
  >
    <nav class="p-4 space-y-6">
      {#each navItems as section}
        <div>
          <h4
            class="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2"
          >
            {section.title}
          </h4>
          <div class="space-y-1">
            {#each section.items as item}
              <button
                class="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm hover:bg-secondary/50 transition-colors text-left"
              >
                <item.icon class="size-4 text-muted-foreground" />
                {item.label}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </nav>
  </aside> -->

  <!-- Backdrop for mobile -->
  <!-- {#if sidebarOpen}
    <button
      class="fixed inset-0 z-30 bg-black/50 lg:hidden"
      onclick={() => (sidebarOpen = false)}
      aria-label="Close sidebar"
    ></button>
  {/if} -->

  <!-- Main content -->
  <main class="flex-1 px-6 py-8 md:px-12 md:py-16 max-w-4xl">
    <div class="markdown-content">
      <h1>TCG Lightning Wiki</h1>

      <h2>FAQ</h2>

      <h3>1. The app is new and buggy, please report bugs!</h3>
      <p>
        TCG Lightning is under active development. If you encounter any issues,
        please report them on our <a href="https://github.com/dimfred/tcg-lightning/issues" target="_blank" rel="noopener noreferrer">GitHub Issues page</a>.
      </p>

      <h3>2. Search Syntax</h3>
      <p>
        TCG Lightning uses <a href="https://scryfall.com/docs/syntax" target="_blank" rel="noopener noreferrer">Scryfall search syntax</a>.
        Our implementation might be incomplete - please report any missing features.
      </p>
      <p>
        <strong>Tip:</strong> Press <code>Ctrl+Enter</code> in the search box to convert natural language to Scryfall syntax using AI.
      </p>

      <h3>3. Keybindings</h3>
      <p>
        All keyboard shortcuts can be found and customized in the Settings menu.
      </p>

      <h3>4. LLM Provider Integration</h3>
      <p>
        We recommend using <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">OpenRouter</a> - they offer 50 free requests per day.
      </p>
      <p><strong>Setup:</strong></p>
      <ol>
        <li>Sign up at OpenRouter</li>
        <li>Click your profile (top right) → API Keys tab</li>
        <li>Generate an API key</li>
        <li>In TCG Lightning: Settings (top right) → LLM Providers → Add to OpenRouter</li>
      </ol>
      <p>Recommended models:</p>
      <ul>
        <li><strong>GLM 4.5</strong> - Good free model that helps with search syntax</li>
        <li><strong>OpenAI GPT-5.1-chat</strong> - Better quality for complex tasks, cost-effective</li>
        <li><strong>GLM family</strong> - Various options for different needs</li>
      </ul>
    </div>
  </main>
</div>
