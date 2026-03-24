<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import Lightbox from "$lib/components/Lightbox.svelte";
</script>

<svelte:head>
  <title
    >TCG Lightning First Release - A New MTG Deck Builder Is Here | TCG
    Lightning Blog</title
  >
  <meta
    name="description"
    content="Introducing TCG Lightning v0.1.33 - a fast, modern Magic: The Gathering deck builder with EDHREC integration, AI chat, combo detection, collection management, and proxy printing."
  />
  <meta
    name="keywords"
    content="MTG deck builder, Magic The Gathering, EDHREC, Commander, EDH, deck building app, TCG Lightning, proxy printing, collection manager"
  />
  <link rel="canonical" href="https://tcg-lightning.com/blog/first-release" />

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="TCG Lightning First Release - A New MTG Deck Builder Is Here"
  />
  <meta
    property="og:description"
    content="Introducing TCG Lightning - a fast, modern Magic: The Gathering deck builder with EDHREC integration, AI chat, combo detection, and more."
  />
  <meta
    property="og:image"
    content="https://tcg-lightning.com/blog-first-release/deck-overview.webp"
  />
  <meta
    property="og:url"
    content="https://tcg-lightning.com/blog/first-release"
  />
  <meta property="og:type" content="article" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="TCG Lightning First Release - A New MTG Deck Builder Is Here"
  />
  <meta
    name="twitter:description"
    content="Introducing TCG Lightning - a fast, modern Magic: The Gathering deck builder with EDHREC integration, AI chat, combo detection, and more."
  />
  <meta
    name="twitter:image"
    content="https://tcg-lightning.com/blog-first-release/deck-overview.webp"
  />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "TCG Lightning First Release - A New MTG Deck Builder Is Here",
    description:
      "Introducing TCG Lightning v0.1.33 - a fast, modern Magic: The Gathering deck builder with EDHREC integration, AI chat, combo detection, collection management, and proxy printing.",
    image: "https://tcg-lightning.com/blog-first-release/deck-overview.webp",
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
    author: {
      "@type": "Organization",
      name: "TCG Lightning",
      url: "https://tcg-lightning.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TCG Lightning",
      url: "https://tcg-lightning.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://tcg-lightning.com/blog/first-release",
    },
  })}</script>`}

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tcg-lightning.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://tcg-lightning.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "First Release",
        item: "https://tcg-lightning.com/blog/first-release",
      },
    ],
  })}</script>`}
</svelte:head>

<article class="container mx-auto px-4 py-16 max-w-3xl">
  <!-- Breadcrumb -->
  <nav class="text-sm text-muted-foreground mb-8">
    <a href={resolve("/blog")} class="hover:text-brand transition-colors"
      >Blog</a
    >
    <span class="mx-2">/</span>
    <span>First Release</span>
  </nav>

  <!-- Header -->
  <header class="mb-10">
    <time datetime="2026-03-11" class="text-sm text-muted-foreground"
      >March 11, 2026</time
    >
    <h1 class="text-4xl font-bold mt-2 mb-4">
      TCG Lightning Is Here — A New Way to Build MTG Decks
    </h1>
    <p class="text-lg text-muted-foreground">
      After months of development, <a
        href={resolve("/#download")}
        class="text-brand hover:underline">TCG Lightning v0.1.33</a
      > the first major release is out. A fast, modern desktop app for building Magic:
      The Gathering — with EDHREC integration, Archidekt Combo Spellbook integration,
      and some AI features like deck tagging.
    </p>
  </header>

  <!-- Hero Image -->
  <figure class="mb-12">
    <Lightbox
      src={asset("/blog-first-release/deck-overview.webp")}
      alt="TCG Lightning deck overview showing Commander and Pauper decks with card previews"
      class="w-full"
      width={1500}
      height={900}
      eager
    />
    <figcaption class="text-sm text-muted-foreground mt-2 text-center">
      The TCG Lightning deck overview — manage all your decks at a glance.
    </figcaption>
  </figure>

  <!-- Content -->
  <div class="prose prose-invert max-w-none space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">Why I Built This</h2>
      <p class="text-muted-foreground leading-relaxed">
        My deck building workflow was scattered across multiple tools. I'd
        search for cards on Scryfall, track my decks in Cockatrice, check
        synergies and staples on EDHREC, and when I couldn't decide what to cut
        I'd start talking to an AI to figure it out. I kept thinking — why isn't
        all of this in one place? And since I love building things, I started
        working on TCG Lightning.
      </p>
    </section>

    <figure class="my-8">
      <Lightbox
        src={asset("/blog-first-release/cockatrice-inspired-interface.webp")}
        alt="TCG Lightning deck builder interface inspired by Cockatrice"
        class="w-full"
        width={1500}
        height={900}
      />
      <figcaption class="text-sm text-muted-foreground mt-2 text-center">
        Cockatrice inspired user interface.
      </figcaption>
    </figure>

    <section>
      <h2 class="text-2xl font-semibold mb-4">What's in the First Release</h2>

      <h3 class="text-xl font-medium mt-6 mb-3">EDHREC Integration</h3>
      <p class="text-muted-foreground leading-relaxed">
        TCG Lightning connects directly to the EDHREC API — synergy scores,
        inclusion rates, top cards for your commander, all available right
        inside the app.
      </p>

      <h3 class="text-xl font-medium mt-6 mb-3">Combo Detection</h3>
      <p class="text-muted-foreground leading-relaxed">
        Powered by Archidekt Combo Spellbook — find combos already in your deck
        and discover what pieces you're missing.
      </p>

      <h3 class="text-xl font-medium mt-6 mb-3">Proxy Printing</h3>
      <p class="text-muted-foreground leading-relaxed">
        I always used <a
          href="https://mtgprint.net"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">mtgprint.net</a
        > for proxies, but the images took forever to load. It made sense to have
        this as part of the app. Now I pick the artworks I want and print directly
        — no waiting around.
      </p>

      <h3 class="text-xl font-medium mt-6 mb-3">Collection Management</h3>
      <p class="text-muted-foreground leading-relaxed">
        I love using <a
          href="https://manabox.app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">Manabox</a
        >, and I track my collection actively there. I actually already wrote an
        application once where my friends could upload their collections and we
        could crosscheck who has what. Well, now I can do that directly in the
        app :) noice!
      </p>

      <h3 class="text-xl font-medium mt-6 mb-3">Deck Import & Export</h3>
      <p class="text-muted-foreground leading-relaxed">
        Classical formats — plaintext import and export. And also Cockatrice
        import and export, so you can play directly.
      </p>

      <h3 class="text-xl font-medium mt-6 mb-3">AI Chat</h3>
      <p class="text-muted-foreground leading-relaxed">
        I know a lot of people are already screaming "aehh AI slop, aehh
        mimimi." But it's still nice to have some AI features. What I use the
        most is the chat for cutting cards, or to tag my deck. I have a lot of
        tags — draw, removal, you name them. I just say "tag my deck," all the
        cards are checked by the LLM and it tags them in your style, with your
        tags. You can still decide whether it makes sense. But this saves me a
        lot of time. And to be fair, I built this for myself!
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p class="text-muted-foreground leading-relaxed">
        <a
          href="https://discord.gg/vGpqEcxzRG"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">Join my Discord</a
        > — I'd love to hear from you &#x2764;
      </p>
    </section>
  </div>
</article>
