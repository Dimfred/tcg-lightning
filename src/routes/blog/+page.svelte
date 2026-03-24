<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import * as Card from "$lib/components/ui/card";

  const posts = [
    {
      slug: "xmage-proxy-2",
      title: "From Terminal to UI — XMage Integration Progress",
      description:
        "Playing actual games of Magic in TCG Lightning via XMage — with protobuf, fine-grained events, and a TypeScript client.",
      date: "2026-03-24",
      image: "/blog-xmage-proxy-2/current-state-ui.webp",
      imageSm: "/blog-xmage-proxy-2/current-state-ui-sm.webp",
      width: 1920,
      height: 1025,
    },
    {
      slug: "xmage-proxy-1",
      title: "Playing Magic in the Terminal",
      description:
        "I started building a bridge between TCG Lightning and XMage — by Sunday I was playing my first round of Magic in the terminal.",
      date: "2026-03-16",
      image: "/blog-xmage-proxy-1/terminal-magic.webp",
      imageSm: "/blog-xmage-proxy-1/terminal-magic-sm.webp",
      width: 1920,
      height: 985,
    },
    {
      slug: "performance-tracking",
      title: "Performance Tracking",
      description:
        "Someone on Reddit asked about performance tracking. I thought it's a good idea, so I added it — log matches, events, and track your win/loss/draw stats.",
      date: "2026-03-13",
      image: "/blog-performance-tracking/performance-ui.webp",
      imageSm: "/blog-performance-tracking/performance-ui-sm.webp",
      width: 1920,
      height: 1038,
    },
    {
      slug: "first-release",
      title: "TCG Lightning Is Here — A New Way to Build MTG Decks",
      description:
        "Introducing TCG Lightning v0.1.33 — a fast, modern desktop app for building Magic: The Gathering decks with EDHREC integration, AI chat, combo detection, and more.",
      date: "2026-03-11",
      image: "/blog-first-release/deck-overview.webp",
      imageSm: "/blog-first-release/deck-overview-sm.webp",
      width: 1920,
      height: 1043,
    },
  ];
</script>

<svelte:head>
  <title>Blog - TCG Lightning</title>
  <meta
    name="description"
    content="My journey of building a Magic ecosystem."
  />
  <link rel="canonical" href="https://tcg-lightning.com/blog" />

  <meta property="og:title" content="Blog - TCG Lightning" />
  <meta
    property="og:description"
    content="My journey of building a Magic ecosystem."
  />
  <meta property="og:image" content="https://tcg-lightning.com/logo_og.webp" />
  <meta property="og:url" content="https://tcg-lightning.com/blog" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Blog - TCG Lightning" />
  <meta
    name="twitter:description"
    content="My journey of building a Magic ecosystem."
  />
  <meta name="twitter:image" content="https://tcg-lightning.com/logo_og.webp" />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog - TCG Lightning",
    description: "My journey of building a Magic ecosystem.",
    url: "https://tcg-lightning.com/blog",
    isPartOf: {
      "@type": "WebSite",
      name: "TCG Lightning",
      url: "https://tcg-lightning.com",
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
    ],
  })}</script>`}
</svelte:head>

<div class="container mx-auto px-4 py-16 max-w-5xl">
  <h1 class="text-4xl font-bold mb-4">Blog</h1>
  <p class="text-muted-foreground mb-12">
    My journey of building a Magic ecosystem.
  </p>

  <div class="flex flex-col gap-6">
    {#each posts as post}
      <a href={resolve(`/blog/${post.slug}`)} class="group">
        <Card.Root
          class="overflow-hidden hover:border-brand/50 transition-all duration-200 hover:shadow-lg hover:shadow-brand/5"
        >
          <div class="flex flex-col sm:flex-row p-4 gap-4">
            <img
              src={asset(post.image)}
              srcset="{asset(post.imageSm)} 640w, {asset(post.image)} 1280w"
              sizes="(max-width: 640px) 100vw, 320px"
              alt={post.title}
              class="w-full sm:w-80 h-48 sm:h-auto object-cover shrink-0 rounded-md"
              width={post.width}
              height={post.height}
              loading="lazy"
            />
            <div class="flex flex-col justify-center">
              <time datetime={post.date} class="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 class="text-xl font-semibold text-brand mt-1 mb-2">
                {post.title}
              </h2>
              <p class="text-base text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
        </Card.Root>
      </a>
    {/each}
  </div>
</div>
