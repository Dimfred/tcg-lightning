<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import Lightbox from "$lib/components/Lightbox.svelte";
</script>

<svelte:head>
  <title>Performance Tracking in TCG Lightning | TCG Lightning Blog</title>
  <meta
    name="description"
    content="TCG Lightning v0.1.34 adds performance tracking — log your matches and events, track your win/loss/draw stats, all inside the app."
  />
  <meta
    name="keywords"
    content="MTG performance tracking, Magic The Gathering stats, match history, tournament tracker, TCG Lightning, EDH stats"
  />
  <link
    rel="canonical"
    href="https://tcg-lightning.com/blog/performance-tracking"
  />

  <meta property="og:title" content="Performance Tracking in TCG Lightning" />
  <meta
    property="og:description"
    content="Log your matches and events, track your win/loss/draw stats, all inside the app."
  />
  <meta
    property="og:image"
    content="https://tcg-lightning.com/blog-performance-tracking/performance-ui.webp"
  />
  <meta
    property="og:url"
    content="https://tcg-lightning.com/blog/performance-tracking"
  />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Performance Tracking in TCG Lightning" />
  <meta
    name="twitter:description"
    content="Log your matches and events, track your win/loss/draw stats, all inside the app."
  />
  <meta
    name="twitter:image"
    content="https://tcg-lightning.com/blog-performance-tracking/performance-ui.webp"
  />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Performance Tracking in TCG Lightning",
    description:
      "TCG Lightning v0.1.34 adds performance tracking — log your matches and events, track your win/loss/draw stats, all inside the app.",
    image:
      "https://tcg-lightning.com/blog-performance-tracking/performance-ui.webp",
    datePublished: "2026-03-13",
    dateModified: "2026-03-13",
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
      "@id": "https://tcg-lightning.com/blog/performance-tracking",
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
        name: "Performance Tracking",
        item: "https://tcg-lightning.com/blog/performance-tracking",
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
    <span>Performance Tracking</span>
  </nav>

  <header class="mb-10">
    <time datetime="2026-03-13" class="text-sm text-muted-foreground"
      >March 13, 2026</time
    >
    <h1 class="text-4xl font-bold mt-2 mb-4">Performance Tracking</h1>
    <p class="text-lg text-muted-foreground">
      Someone on Reddit asked about performance tracking. I thought it's a good
      idea, so I added it in <a
        href={resolve("/#download")}
        class="text-brand hover:underline">v0.1.34</a
      >.
    </p>
  </header>

  <figure class="mb-12">
    <Lightbox
      src={asset("/blog-performance-tracking/performance-ui.webp")}
      srcSm={asset("/blog-performance-tracking/performance-ui-sm.webp")}
      alt="TCG Lightning performance tracking UI showing match statistics with win/loss/draw tracking"
      class="w-full"
      width={1920}
      height={1038}
      eager
    />
    <figcaption class="text-sm text-muted-foreground mt-2 text-center">
      The statistics tab with performance tracking.
    </figcaption>
  </figure>

  <div class="prose prose-invert max-w-none space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">How It Works</h2>
      <p class="text-muted-foreground leading-relaxed">
        Right now you can create Matches and Events. Events are essentially
        tournaments — a group of matches bundled together. You add your Win /
        Loss / Draw stats, and yeah, that's actually it. It's part of the
        statistics UI in the frontend.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">What's Next</h2>
      <p class="text-muted-foreground leading-relaxed">
        I haven't had time yet to connect it to the MTG Companion app. I still
        need to check their API and whether it's open. But if it is, I plan to
        connect it so that statistics are pulled from there automatically.
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
