<script lang="ts">
  import { asset } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import {
    Download,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
  } from "lucide-svelte";

  type Screenshot = {
    src: string;
    caption: string;
  };

  // Screenshots carousel
  const screenshots: Screenshot[] = [
    {
      src: asset("/screenshots/deck-builder.jpg"),
      caption: "Build and manage your decks with a clean, intuitive interface.",
    },
    {
      src: asset("/screenshots/card-search.jpg"),
      caption:
        "Search using Scryfall syntax or natural language - find cards your way.",
    },
    {
      src: asset("/screenshots/proxies.jpg"),
      caption:
        "Create custom proxies with your own artwork directly in the app.",
    },
    {
      src: asset("/screenshots/ai-chat.jpg"),
      caption:
        "Use AI to tag cards, suggest cuts, find synergies, or get deck recommendations.",
    },
    {
      src: asset("/screenshots/edhrec.jpg"),
      caption:
        "Use EDHREC integration to discover powerful synergies for your deck.",
    },
    {
      src: asset("/screenshots/archidekt.jpg?v=2"),
      caption: "Discover combos in your deck with Archidekt's ComboSpellbook.",
    },
  ];

  let currentSlide = $state(0);
  let allFailed = $state(false);
  let failedCount = $state(0);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % screenshots.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + screenshots.length) % screenshots.length;
  }

  function handleImageError() {
    failedCount++;
    if (failedCount >= screenshots.length) {
      allFailed = true;
    }
  }

  function scrollToDownload() {
    const element = document.getElementById("download");
    element?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<section
  id="hero"
  class="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center py-20 md:py-32 hero-gradient grid-pattern overflow-hidden"
>
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-chart-1/5 to-transparent rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s;"
    ></div>
  </div>

  <div class="container mx-auto px-4 text-center relative z-10">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          src={asset("/logo_full.png")}
          alt="TCG Lightning"
          class="h-16 md:h-24 w-auto drop-shadow-lg"
        />
      </div>

      <!-- Tagline -->
      <p class="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        A fast, modern deck builder for<br />
        <span class="text-foreground font-medium">Magic: The Gathering</span>
      </p>

      <!-- CTA Button (desktop only) -->
      <div class="hidden md:flex justify-center pt-4">
        <Button
          size="lg"
          class="min-w-[180px] text-base"
          onclick={scrollToDownload}
        >
          <Download class="size-5" />
          Download Now
        </Button>
      </div>

      <!-- Screenshot Carousel -->
      <div class="mt-12 md:mt-16 relative">
        <div class="mx-auto max-w-5xl space-y-4">
          <div
            class="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-black/50 {allFailed
              ? 'aspect-video bg-card flex items-center justify-center'
              : ''}"
          >
            {#if allFailed}
              <span class="text-muted-foreground">Screenshots coming soon</span>
            {:else}
              <!-- Carousel Container -->
              <div class="relative">
                {#each screenshots as screenshot, i}
                  <div
                    class="absolute inset-0 transition-opacity duration-500 {i ===
                    currentSlide
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0'} {[1, 3, 4].includes(i)
                      ? 'flex items-center justify-center bg-card px-8 md:px-16'
                      : ''}"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.caption}
                      class={[1, 3, 4].includes(i)
                        ? "h-full w-auto max-w-full object-contain"
                        : "w-full h-auto"}
                      onerror={handleImageError}
                    />
                  </div>
                {/each}
                <!-- Spacer to maintain aspect ratio -->
                <img
                  src={screenshots[0].src}
                  alt=""
                  class="w-full h-auto invisible"
                  aria-hidden="true"
                />

                <!-- Navigation Arrows -->
                {#if screenshots.length > 1}
                  <button
                    onclick={prevSlide}
                    class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft class="size-5 md:size-6" />
                  </button>
                  <button
                    onclick={nextSlide}
                    class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight class="size-5 md:size-6" />
                  </button>
                {/if}

                <!-- Dots Indicator -->
                {#if screenshots.length > 1}
                  <div
                    class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
                  >
                    {#each screenshots as _, i}
                      <button
                        onclick={() => (currentSlide = i)}
                        class="w-2 h-2 rounded-full transition-colors {i ===
                        currentSlide
                          ? 'bg-primary'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}"
                        aria-label="Go to slide {i + 1}"
                      ></button>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </div>

          <!-- Caption below image -->
          {#if !allFailed && screenshots[currentSlide]}
            <div class="text-center px-4">
              <p class="text-muted-foreground text-sm md:text-base">
                {screenshots[currentSlide].caption}
              </p>
            </div>
          {/if}
        </div>

        <!-- Decorative glow under screenshot -->
        <div
          class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/20 blur-3xl rounded-full"
        ></div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
    >
      <button
        onclick={scrollToDownload}
        class="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown class="size-8" />
      </button>
    </div>
  </div>
</section>
