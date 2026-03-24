<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import DownloadSection from "$lib/components/DownloadSection.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>TCG Lightning - Free MTG Deck Builder | Magic: The Gathering</title>
  <meta
    name="description"
    content="Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall search. Desktop app for Windows, macOS, and Linux."
  />
  <link rel="canonical" href="https://tcg-lightning.com/" />

  <meta
    property="og:title"
    content="TCG Lightning - Free MTG Deck Builder | Magic: The Gathering"
  />
  <meta
    property="og:description"
    content="Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall search. Desktop app for Windows, macOS, and Linux."
  />
  <meta property="og:image" content="https://tcg-lightning.com/logo_og.webp" />
  <meta property="og:url" content="https://tcg-lightning.com/" />
  <meta
    name="twitter:title"
    content="TCG Lightning - Free MTG Deck Builder | Magic: The Gathering"
  />
  <meta
    name="twitter:description"
    content="Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall search."
  />
  <meta name="twitter:image" content="https://tcg-lightning.com/logo_og.webp" />

  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"TCG Lightning","applicationCategory":"GameApplication","operatingSystem":"Windows, macOS, Linux","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"description":"Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall card search.","url":"https://tcg-lightning.com/","downloadUrl":"https://github.com/dimfred/tcg-lightning/releases/latest"}</script>'}
  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://tcg-lightning.com/"}]}</script>'}

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is TCG Lightning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TCG Lightning is a free Magic: The Gathering deck builder for Windows, macOS, and Linux. It features offline Scryfall card search, real-time EDHREC synergy scores, automatic combo detection via Archidekt Combo Spellbook, AI-powered card suggestions, collection management with Manabox import, and proxy PDF generation for playtesting.",
        },
      },
      {
        "@type": "Question",
        name: "Is TCG Lightning free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TCG Lightning is completely free. All features including EDHREC integration, combo detection, AI chat, collection management, and proxy generation are available to every user.",
        },
      },
      {
        "@type": "Question",
        name: "How does the AI deck assistant work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TCG Lightning integrates with OpenAI, Anthropic, and local Ollama models to provide AI-powered card suggestions. You can chat with the AI about your deck strategy, ask for card recommendations, or get help optimizing your mana base. The AI understands your current deck context and format.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play MTG games through TCG Lightning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TCG Lightning is building an XMage integration that lets you play actual games of Magic directly from the app. The XMage bridge connects to XMage servers so you can test your decks against real opponents. This feature is currently in active development.",
        },
      },
    ],
  })}</script>`}
</svelte:head>

<Hero />
<AboutSection />

<section id="faq" class="py-16 md:py-24 border-t border-border">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
    </div>
    <div class="max-w-3xl mx-auto space-y-6">
      <details class="group border border-border rounded-lg" open>
        <summary
          class="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-lg"
        >
          What is TCG Lightning?
          <span
            class="transition-transform group-open:rotate-180 text-muted-foreground"
            >&#9662;</span
          >
        </summary>
        <div class="px-6 pb-4 text-muted-foreground">
          TCG Lightning is a free Magic: The Gathering deck builder for Windows,
          macOS, and Linux. It features offline Scryfall card search, real-time
          EDHREC synergy scores, automatic combo detection via Archidekt Combo
          Spellbook, AI-powered card suggestions, collection management with
          Manabox import, and proxy PDF generation for playtesting.
        </div>
      </details>
      <details class="group border border-border rounded-lg">
        <summary
          class="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-lg"
        >
          Is TCG Lightning free?
          <span
            class="transition-transform group-open:rotate-180 text-muted-foreground"
            >&#9662;</span
          >
        </summary>
        <div class="px-6 pb-4 text-muted-foreground">
          Yes, TCG Lightning is completely free. All features including EDHREC
          integration, combo detection, AI chat, collection management, and
          proxy generation are available to every user.
        </div>
      </details>
      <details class="group border border-border rounded-lg">
        <summary
          class="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-lg"
        >
          How does the AI deck assistant work?
          <span
            class="transition-transform group-open:rotate-180 text-muted-foreground"
            >&#9662;</span
          >
        </summary>
        <div class="px-6 pb-4 text-muted-foreground">
          TCG Lightning integrates with OpenAI, Anthropic, and local Ollama
          models to provide AI-powered card suggestions. You can chat with the
          AI about your deck strategy, ask for card recommendations, or get help
          optimizing your mana base. The AI understands your current deck
          context and format.
        </div>
      </details>
      <details class="group border border-border rounded-lg">
        <summary
          class="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-lg"
        >
          Can I play MTG games through TCG Lightning?
          <span
            class="transition-transform group-open:rotate-180 text-muted-foreground"
            >&#9662;</span
          >
        </summary>
        <div class="px-6 pb-4 text-muted-foreground">
          Yes, TCG Lightning is building an XMage integration that lets you play
          actual games of Magic directly from the app. The XMage bridge connects
          to XMage servers so you can test your decks against real opponents.
          This feature is currently in active development.
        </div>
      </details>
    </div>
  </div>
</section>

<DownloadSection version={data.version} releases={data.releases} />
