<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import Lightbox from "$lib/components/Lightbox.svelte";
</script>

<svelte:head>
  <title>Playing Magic in the Terminal — XMage Proxy | TCG Lightning Blog</title
  >
  <meta
    name="description"
    content="I started building a bridge between TCG Lightning and XMage — a Java proxy that translates JBoss serialization to WebSocket, so a TypeScript client can talk to the XMage server."
  />
  <meta
    name="keywords"
    content="XMage, MTG online play, Magic The Gathering, TCG Lightning, open source, XMage proxy, WebSocket, deck builder"
  />
  <link rel="canonical" href="https://tcg-lightning.com/blog/xmage-proxy-1" />

  <meta
    property="og:title"
    content="Playing Magic in the Terminal — XMage Proxy"
  />
  <meta
    property="og:description"
    content="Building a bridge between TCG Lightning and XMage — playing my first round of Magic in the terminal."
  />
  <meta
    property="og:image"
    content="https://tcg-lightning.com/blog-xmage-proxy-1/terminal-magic.webp"
  />
  <meta
    property="og:url"
    content="https://tcg-lightning.com/blog/xmage-proxy-1"
  />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Playing Magic in the Terminal — XMage Proxy"
  />
  <meta
    name="twitter:description"
    content="Building a bridge between TCG Lightning and XMage — playing my first round of Magic in the terminal."
  />
  <meta
    name="twitter:image"
    content="https://tcg-lightning.com/blog-xmage-proxy-1/terminal-magic.webp"
  />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Playing Magic in the Terminal — XMage Proxy",
    description:
      "I started building a bridge between TCG Lightning and XMage — a Java proxy that translates JBoss serialization to WebSocket, so a TypeScript client can talk to the XMage server.",
    image: "https://tcg-lightning.com/blog-xmage-proxy-1/terminal-magic.webp",
    datePublished: "2026-03-16",
    dateModified: "2026-03-16",
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
      "@id": "https://tcg-lightning.com/blog/xmage-proxy-1",
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
        name: "XMage Proxy",
        item: "https://tcg-lightning.com/blog/xmage-proxy-1",
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
    <span>XMage Proxy</span>
  </nav>

  <header class="mb-10">
    <time datetime="2026-03-16" class="text-sm text-muted-foreground"
      >March 16, 2026</time
    >
    <h1 class="text-4xl font-bold mt-2 mb-4">Playing Magic in the Terminal</h1>
    <p class="text-lg text-muted-foreground">
      Over the weekend I started digging into online play for TCG Lightning. By
      Sunday I was playing my first round of Magic in the terminal.
    </p>
  </header>

  <figure class="mb-12">
    <Lightbox
      src={asset("/blog-xmage-proxy-1/terminal-magic.webp")}
      alt="Playing a round of Magic: The Gathering through the terminal via the XMage proxy"
      class="w-full"
      width={1500}
      height={900}
      eager
    />
    <figcaption class="text-sm text-muted-foreground mt-2 text-center">
      My first game of Magic in the terminal.
    </figcaption>
  </figure>

  <div class="prose prose-invert max-w-none space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">Down the Rabbit Hole</h2>
      <p class="text-muted-foreground leading-relaxed">
        I first wanted to recreate the interface and style of Cockatrice for
        online play, but at some point I thought about XMage and started looking
        into it. Turns out XMage is actually fully open source — especially the
        server, which does all the rules validation. But everything is written
        in Java, and the protocol for client-server communication is basically
        serialized with Java JBoss or something like that. So I can't just
        attach a TypeScript client, which is what I'm using in TCG Lightning.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">The Proxy Approach</h2>
      <p class="text-muted-foreground leading-relaxed">
        I needed a way to talk to the server, so I started creating a proxy in
        Java that acts as a middleman. The proxy handles the JBoss serialization
        stuff towards the XMage server, and talks WebSocket to the client.
        That's the
        <a
          href="https://github.com/Dimfred/tcg-lightning-xmage-bridge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand hover:underline">tcg-lightning-xmage-bridge</a
        > project.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">What's the Plan</h2>
      <p class="text-muted-foreground leading-relaxed">
        I plan to open-source the parts. If the XMage people at some point
        agree, I'd love to merge the proxy back into their project. The client
        library in TypeScript will be the first open-source part of TCG
        Lightning.
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
