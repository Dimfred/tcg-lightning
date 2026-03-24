<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import Lightbox from "$lib/components/Lightbox.svelte";
</script>

<svelte:head>
  <title
    >From Terminal to UI — XMage Integration Progress | TCG Lightning Blog</title
  >
  <meta
    name="description"
    content="Progress on the XMage integration for TCG Lightning — a TypeScript client, protobuf messaging, and the first playable game UI connected to an XMage server."
  />
  <meta
    name="keywords"
    content="XMage, MTG online play, Magic The Gathering, TCG Lightning, open source, XMage proxy, WebSocket, protobuf, TypeScript client, deck builder"
  />
  <link rel="canonical" href="https://tcg-lightning.com/blog/xmage-proxy-2" />

  <meta
    property="og:title"
    content="From Terminal to UI — XMage Integration Progress"
  />
  <meta
    property="og:description"
    content="Playing actual games of Magic in TCG Lightning via XMage — with protobuf, fine-grained events, and a TypeScript client."
  />
  <meta
    property="og:image"
    content="https://tcg-lightning.com/blog-xmage-proxy-2/current-state-ui.webp"
  />
  <meta
    property="og:url"
    content="https://tcg-lightning.com/blog/xmage-proxy-2"
  />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="From Terminal to UI — XMage Integration Progress"
  />
  <meta
    name="twitter:description"
    content="Playing actual games of Magic in TCG Lightning via XMage — with protobuf, fine-grained events, and a TypeScript client."
  />
  <meta
    name="twitter:image"
    content="https://tcg-lightning.com/blog-xmage-proxy-2/current-state-ui.webp"
  />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "From Terminal to UI — XMage Integration Progress",
    description:
      "Progress on the XMage integration for TCG Lightning — a TypeScript client, protobuf messaging, and the first playable game UI connected to an XMage server.",
    image: "https://tcg-lightning.com/blog-xmage-proxy-2/current-state-ui.webp",
    datePublished: "2026-03-24",
    dateModified: "2026-03-24",
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
      "@id": "https://tcg-lightning.com/blog/xmage-proxy-2",
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
        name: "XMage Proxy — Part 2",
        item: "https://tcg-lightning.com/blog/xmage-proxy-2",
      },
    ],
  })}</script>`}
</svelte:head>

<article class="container mx-auto px-4 py-16 max-w-3xl">
  <nav class="text-sm text-muted-foreground mb-8">
    <a href={resolve("/blog")} class="hover:text-brand transition-colors"
      >Blog</a
    >
    <span class="mx-2">/</span>
    <span>XMage Proxy — Part 2</span>
  </nav>

  <header class="mb-10">
    <time datetime="2026-03-24" class="text-sm text-muted-foreground"
      >March 24, 2026</time
    >
    <h1 class="text-4xl font-bold mt-2 mb-4">From Terminal to UI</h1>
    <p class="text-lg text-muted-foreground">
      A week ago I played my first game of Magic in the terminal. Now I'm
      playing actual games in TCG Lightning — cards on the stack, paying mana
      costs, the whole thing — all driven by a TypeScript client talking to
      XMage through the proxy.
    </p>
  </header>

  <figure class="mb-12">
    <Lightbox
      src={asset("/blog-xmage-proxy-2/current-state-ui.webp")}
      alt="Two TCG Lightning windows side by side playing a game of Magic against each other via XMage, with cards on the stack and mana payment prompts"
      class="w-full"
      width={1500}
      height={900}
      eager
    />
    <figcaption class="text-sm text-muted-foreground mt-2 text-center">
      Playing against myself — two TCG Lightning clients connected to the same
      XMage server.
    </figcaption>
  </figure>

  <div class="prose prose-invert max-w-none space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">What Is XMage?</h2>
      <p class="text-muted-foreground leading-relaxed">
        For those who don't know — <a
          href="https://xmage.today/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">XMage</a
        > is a Java-based client/server that provides full Magic rules enforcement
        and an automated stack. It's open source and has been around for years. The
        goal of my integration is to let TCG Lightning connect to XMage servers so
        you can play games with proper rules enforcement directly from the app.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">The Bridge So Far</h2>
      <p class="text-muted-foreground leading-relaxed">
        The <a
          href="https://github.com/Dimfred/tcg-lightning-xmage-bridge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">tcg-lightning-xmage-bridge</a
        >
        has come a long way since the last post. The proxy now handles login,
        lobby interactions, table creation & joining, and full game sessions. On
        the TypeScript side there's a callback API — you subscribe to events
        like <code class="text-brand">onChatMessage</code>,
        <code class="text-brand">onGameUpdate</code>, or
        <code class="text-brand">onSessionExpired</code> and get properly typed payloads
        back.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Rethinking Server Messages</h2>
      <p class="text-muted-foreground leading-relaxed">
        There are a lot of different messages coming from the XMage server, and
        many different things the UI needs to do when they arrive. I started by
        passing the raw objects straight through to the client, but honestly the
        server messages leave a lot to wish for when it comes to building a
        modern client on top of them.
      </p>
      <p class="text-muted-foreground leading-relaxed mt-4">
        So I'm now splitting them up — providing more fine-grained events that
        let a consumer handle each situation in a specific way. The client
        library supports both approaches: if you want the raw, unprocessed
        server events you can subscribe to those, but if you want something more
        modern and granular, the library breaks things up into distinct,
        well-typed events. I think this makes building a UI on top of XMage much
        more pleasant.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Protobuf for the Wire</h2>
      <p class="text-muted-foreground leading-relaxed">
        I'm also introducing <strong>Protocol Buffers</strong> into the message layer.
        Right now messages go over the wire as JSON, which works but is verbose. Protobuf
        will shrink the transfer size and — just as importantly — let me generate
        types for both the Java proxy and the TypeScript client from a single schema.
        Less duplicated code, fewer drift bugs, one source of truth for all message
        types.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">What's Next</h2>
      <p class="text-muted-foreground leading-relaxed">
        There's still a lot to handle on the client side — properly converting
        all the remaining server messages, rendering game state changes
        smoothly, and polishing the UI. But the core loop works: I can play
        cards, they land on the stack, I can pay costs, and the game progresses.
        Right now I'm playing against myself (someone has to be my first
        opponent), but maybe soon I'll be playing against you. If you want to
        follow along, the
        <a
          href="https://github.com/Dimfred/tcg-lightning-xmage-bridge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">bridge repo</a
        > is where it's all happening.
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
