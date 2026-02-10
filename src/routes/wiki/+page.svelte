<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import {
    Menu,
    X,
    BookOpen,
    Search,
    HelpCircle,
    Bot,
    Tag,
    FileInput,
    FileOutput,
    Printer,
    Keyboard,
  } from "lucide-svelte";

  let sidebarOpen = $state(false);

  const navItems = [
    {
      title: "Help",
      items: [
        { label: "Bug Reporting", icon: HelpCircle, href: "#troubleshooting" },
      ],
    },
    {
      title: "Getting Started",
      items: [
        { label: "Getting Started", icon: BookOpen, href: "#getting-started" },
        { label: "Card Search", icon: Search, href: "#card-search" },
      ],
    },
    {
      title: "Features",
      items: [
        { label: "AI Assistant", icon: Bot, href: "#ai-assistant" },
        { label: "Card Tagging", icon: Tag, href: "#card-tagging" },
        { label: "Import/Export", icon: FileInput, href: "#import-export" },
        { label: "Proxy Printing", icon: Printer, href: "#proxy-printing" },
        {
          label: "Keyboard Shortcuts",
          icon: Keyboard,
          href: "#keyboard-shortcuts",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>TCG Lightning Wiki - MTG Deck Builder Guide & Documentation</title>
  <meta
    name="description"
    content="Complete guide for TCG Lightning: Scryfall card search, AI assistant setup, proxy printing, deck import/export, and keyboard shortcuts."
  />
  <link rel="canonical" href="https://tcg-lightning.com/wiki" />

  <!-- Open Graph overrides for wiki -->
  <meta
    property="og:title"
    content="TCG Lightning Wiki - MTG Deck Builder Guide"
  />
  <meta
    property="og:description"
    content="Complete guide for TCG Lightning: Scryfall card search, AI assistant setup, proxy printing, deck import/export, and keyboard shortcuts."
  />
  <meta property="og:url" content="https://tcg-lightning.com/wiki" />

  <!-- Twitter overrides for wiki -->
  <meta
    name="twitter:title"
    content="TCG Lightning Wiki - MTG Deck Builder Guide"
  />
  <meta
    name="twitter:description"
    content="Complete guide for TCG Lightning: Scryfall card search, AI assistant setup, proxy printing, deck import/export, and keyboard shortcuts."
  />

  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"TCG Lightning Wiki","description":"Complete guide for TCG Lightning MTG deck builder - card search, AI assistant, proxy printing, and more.","url":"https://tcg-lightning.com/wiki","isPartOf":{"@type":"WebSite","name":"TCG Lightning","url":"https://tcg-lightning.com/"}}</script>'}
  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://tcg-lightning.com/"},{"@type":"ListItem","position":2,"name":"Wiki","item":"https://tcg-lightning.com/wiki"}]}</script>'}
</svelte:head>

<div class="flex min-h-[calc(100vh-3.5rem)]">
  <!-- Mobile sidebar toggle -->
  <Button
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
  </Button>

  <!-- Sidebar -->
  <aside
    class="fixed lg:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-background overflow-y-auto transition-transform duration-200 {sidebarOpen
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
              <a
                href={item.href}
                class="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm hover:bg-secondary/50 transition-colors text-left"
                onclick={() => (sidebarOpen = false)}
              >
                <item.icon class="size-4 text-muted-foreground" />
                {item.label}
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </nav>
  </aside>

  <!-- Backdrop for mobile -->
  {#if sidebarOpen}
    <button
      class="fixed inset-0 z-30 bg-black/50 lg:hidden"
      onclick={() => (sidebarOpen = false)}
      aria-label="Close sidebar"
    ></button>
  {/if}

  <!-- Main content -->
  <main class="flex-1 px-6 py-8 md:px-12 md:py-16 max-w-4xl mx-auto">
    <div class="markdown-content">
      <h1>TCG Lightning Wiki</h1>

      <h2 id="troubleshooting">Bug Reporting</h2>
      <p>
        TCG Lightning is under active development. If you encounter any issues,
        please report them directly in the app by clicking the bug icon at the
        top.
      </p>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        When you first launch TCG Lightning, the app will automatically download
        the Scryfall card database. This process takes a few minutes. The app
        will prompt you from time to time when database updates are available.
      </p>

      <h2 id="card-search">Card Search</h2>
      <p>
        TCG Lightning uses <a
          href="https://scryfall.com/docs/syntax"
          target="_blank"
          rel="noopener noreferrer">Scryfall search syntax</a
        >. Press <code>Ctrl+Enter</code> in the search box to convert natural language
        queries into Scryfall syntax using AI.
      </p>

      <h2 id="ai-assistant">AI Assistant</h2>

      <h3 id="llm-setup">Setting Up LLM Providers</h3>

      <h4>OpenRouter (Recommended)</h4>
      <p>
        <a
          href="https://openrouter.ai/"
          target="_blank"
          rel="noopener noreferrer">OpenRouter</a
        > offers 50 free requests per day.
      </p>
      <ol>
        <li>
          Sign up at <a
            href="https://openrouter.ai/"
            target="_blank"
            rel="noopener noreferrer">openrouter.ai</a
          >
        </li>
        <li>Click your profile (top right) → API Keys tab</li>
        <li>Generate an API key</li>
        <li>In TCG Lightning: Settings → LLM Providers → Add to OpenRouter</li>
        <li>Paste your API key and use model: <code>z.ai/glm-4.5-air</code></li>
      </ol>

      <h4>Google Gemini</h4>
      <p>
        <a
          href="https://aistudio.google.com/apikey"
          target="_blank"
          rel="noopener noreferrer">Google Gemini</a
        > offers a generous free API tier.
      </p>
      <ol>
        <li>
          Go to <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener noreferrer">Google AI Studio</a
          >
        </li>
        <li>Create an account and generate an API key</li>
        <li>
          In TCG Lightning: Settings → LLM Providers → Add to Google Gemini
        </li>
        <li>Paste your API key and save</li>
      </ol>

      <h3 id="api-key-storage">Secure API Key Storage</h3>
      <p>
        API keys are stored securely using Tauri plugin vault (Stronghold from
        IOTA). They are never stored in plain text.
      </p>

      <h3 id="ai-features">AI Features</h3>
      <p>
        Open the AI assistant with <code>Ctrl+K</code>. You can use AI to tag
        your creatures and get deck recommendations.
      </p>

      <h2 id="card-tagging">Card Tagging</h2>
      <p>
        Local tags are normal tags. Global tags start with <code>!</code>.
      </p>

      <h2 id="import-export">Import/Export</h2>
      <p>
        Import decks with <code>Ctrl+I</code>. Export decks with
        <code>Ctrl+E</code>. Supports plain text and Cockatrice format.
      </p>

      <h2 id="proxy-printing">Proxy Printing</h2>

      <h3 id="generating-proxies">Generating Proxy PDFs</h3>
      <p>
        TCG Lightning can generate high-quality proxy PDFs for playtesting
        purposes. The feature creates print-ready PDFs with proper card sizing
        and layout.
      </p>
      <ol>
        <li>Open a deck</li>
        <li>Click "Generate Proxies"</li>
        <li>Configure print settings</li>
        <li>Generate and save the PDF</li>
        <li>Print on standard cardstock or paper</li>
      </ol>

      <h3 id="print-settings">Print Settings</h3>
      <ul>
        <li>
          <strong>Paper Size</strong> - Choose A4 (international) or Letter (US) size
        </li>
        <li>
          <strong>Crop Marks</strong> - Add cutting guides for precise trimming
        </li>
        <li>
          <strong>Black Corners</strong> - Fill corners to match real Magic cards
        </li>
        <li>
          <strong>Card Backs</strong> - Include generic Magic backs for double-sided
          printing
        </li>
        <li>
          <strong>Exclude Basic Lands</strong> - Skip basic lands (use real ones instead)
        </li>
      </ul>

      <h3 id="proxy-quality">Quality and Usage</h3>
      <p>
        Proxies generated by TCG Lightning use high-resolution card images from
        Scryfall. They are intended for playtesting only and should not be used
        in sanctioned tournaments.
      </p>

      <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
      <p>All keyboard shortcuts can be customized in Settings → Keybindings.</p>
    </div>
  </main>
</div>
