<script lang="ts">
  import { asset } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import {
    Download,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
  } from "lucide-svelte";

  type Screenshot = {
    src: string;
    caption: string;
  };

  // Screenshots carousel
  const screenshots: Screenshot[] = [
    {
      src: asset("/screenshots/deck-builder.webp"),
      caption: "Build your deck — Scryfall search and Statistics",
    },
    {
      src: asset("/screenshots/card-search.webp"),
      caption:
        "Convert natural language to Scryfall syntax with the help of AI",
    },
    {
      src: asset("/screenshots/proxies.webp"),
      caption:
        "Proxy generator — you want to playtest your deck? No problem, generate a pdf, and print away",
    },
    {
      src: asset("/screenshots/ai-chat.webp"),
      caption:
        "AI deck building assistant — card suggestions, synergies, tagging, the whole app is agentic, meaning the AI can interact with everything inside the app",
    },
    {
      src: asset("/screenshots/edhrec.webp"),
      caption:
        "EDHREC integration for Commander deck building — synergy scores and staples",
    },
    {
      src: asset("/screenshots/archidekt.webp"),
      caption: "Automatic combo detection with Archidekt ComboSpellbook",
    },
  ];

  let currentSlide = $state(0);
  let allFailed = $state(false);
  let failedCount = $state(0);

  // Lightbox state (desktop)
  let lightboxOpen = $state(false);
  let lightboxSlide = $state(0);

  // Mobile fullscreen state
  let mobileFullscreenOpen = $state(false);
  let mobileFullscreenSlide = $state(0);

  // Touch/swipe state
  let touchStartX = $state(0);
  let touchEndX = $state(0);
  let touchStartTime = $state(0);
  const SWIPE_THRESHOLD = 100;
  const TAP_THRESHOLD = 200; // ms - taps shorter than this open fullscreen

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

  // Lightbox functions
  function openLightbox(index: number) {
    lightboxSlide = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function lightboxNext() {
    lightboxSlide = (lightboxSlide + 1) % screenshots.length;
  }

  function lightboxPrev() {
    lightboxSlide =
      (lightboxSlide - 1 + screenshots.length) % screenshots.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!lightboxOpen) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft") lightboxPrev();
  }

  // Mobile fullscreen functions
  let fullscreenContainer: HTMLDivElement | null = null;

  async function openMobileFullscreen(index: number) {
    mobileFullscreenSlide = index;
    mobileFullscreenOpen = true;
    document.body.style.overflow = "hidden";

    // Try to enter browser fullscreen mode (hides URL bar)
    await new Promise((r) => setTimeout(r, 50)); // Wait for element to render
    try {
      if (fullscreenContainer?.requestFullscreen) {
        await fullscreenContainer.requestFullscreen();
      }
    } catch {
      // Fullscreen not supported or denied, continue without it
    }
  }

  async function closeMobileFullscreen() {
    // Exit browser fullscreen if active
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // Ignore errors
      }
    }
    mobileFullscreenOpen = false;
    document.body.style.overflow = "";
  }

  function mobileFullscreenNext() {
    mobileFullscreenSlide = (mobileFullscreenSlide + 1) % screenshots.length;
  }

  function mobileFullscreenPrev() {
    mobileFullscreenSlide =
      (mobileFullscreenSlide - 1 + screenshots.length) % screenshots.length;
  }

  // Touch/swipe handlers for carousel
  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
    touchStartTime = Date.now();
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    const touchDuration = Date.now() - touchStartTime;

    // If it's a tap (short duration, minimal movement), open fullscreen
    if (touchDuration < TAP_THRESHOLD && Math.abs(swipeDistance) < 10) {
      openMobileFullscreen(currentSlide);
      return;
    }

    // Otherwise handle as swipe
    if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Touch handlers for mobile fullscreen navigation
  let fullscreenTouchStartX = $state(0);
  let fullscreenWasMultiTouch = $state(false);

  function handleFullscreenTouchStart(e: TouchEvent) {
    // If more than one finger, it's a zoom gesture
    if (e.touches.length > 1) {
      fullscreenWasMultiTouch = true;
      return;
    }
    fullscreenWasMultiTouch = false;
    fullscreenTouchStartX = e.touches[0].clientX;
  }

  function handleFullscreenTouchEnd(e: TouchEvent) {
    // Ignore if this was part of a multi-touch (zoom) gesture
    if (fullscreenWasMultiTouch) {
      fullscreenWasMultiTouch = false;
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = fullscreenTouchStartX - touchEndX;

    if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
      if (swipeDistance > 0) {
        mobileFullscreenNext();
      } else {
        mobileFullscreenPrev();
      }
    }
  }

  function handleFullscreenTouchMove(e: TouchEvent) {
    // Mark as multi-touch if additional fingers added during gesture
    if (e.touches.length > 1) {
      fullscreenWasMultiTouch = true;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

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
          src={asset("/logo_full.webp")}
          alt="TCG Lightning - Free Magic: The Gathering Deck Builder"
          width="956"
          height="236"
          class="h-16 md:h-24 w-auto drop-shadow-lg"
        />
      </div>

      <!-- Tagline -->
      <h1
        class="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-normal"
      >
        A Modern <span class="text-foreground font-medium"
          >Magic: The Gathering</span
        > Deck Building App for Desktop
      </h1>
      <p
        class="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mt-2"
      >
        With offline card search, EDHREC, Archidekt ComboSpellbook integration
        and AI Tooling
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
              <div
                class="relative"
                role="region"
                aria-label="Screenshot carousel"
                ontouchstart={handleTouchStart}
                ontouchend={handleTouchEnd}
              >
                {#each screenshots as screenshot, i}
                  <div
                    class="absolute inset-0 transition-opacity duration-500 {i ===
                    currentSlide
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0'} {[1, 3, 4].includes(i)
                      ? 'flex items-center justify-center bg-card px-8 md:px-16'
                      : ''}"
                  >
                    <button
                      type="button"
                      class="hidden md:block w-full h-full cursor-zoom-in"
                      onclick={() => openLightbox(i)}
                      aria-label="View {screenshot.caption} in full size"
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.caption}
                        loading={i === 0 ? "eager" : "lazy"}
                        width="1920"
                        height="1080"
                        class={[1, 3, 4].includes(i)
                          ? "h-full w-auto max-w-full object-contain"
                          : "w-full h-auto"}
                        onerror={handleImageError}
                      />
                    </button>
                    <img
                      src={screenshot.src}
                      alt={screenshot.caption}
                      loading={i === 0 ? "eager" : "lazy"}
                      width="1920"
                      height="1080"
                      class="md:hidden {[1, 3, 4].includes(i)
                        ? 'h-full w-auto max-w-full object-contain'
                        : 'w-full h-auto'}"
                      onerror={handleImageError}
                    />
                  </div>
                {/each}
                <!-- Spacer to maintain aspect ratio -->
                <img
                  src={screenshots[0].src}
                  alt="TCG Lightning screenshot"
                  class="w-full h-auto invisible"
                  aria-hidden="true"
                />

                <!-- Navigation Arrows -->
                {#if screenshots.length > 1}
                  <button
                    onclick={prevSlide}
                    class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 md:bg-black/70 text-white hover:bg-black/80 transition-colors z-20 md:border md:border-white/20 md:shadow-lg md:shadow-black/30"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft class="size-5 md:size-8" />
                  </button>
                  <button
                    onclick={nextSlide}
                    class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 md:bg-black/70 text-white hover:bg-black/80 transition-colors z-20 md:border md:border-white/20 md:shadow-lg md:shadow-black/30"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight class="size-5 md:size-8" />
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

  <!-- Lightbox Modal -->
  {#if lightboxOpen}
    <div
      class="fixed inset-0 z-50 hidden md:flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <!-- Backdrop -->
      <button
        type="button"
        class="absolute inset-0 bg-black/90 cursor-default"
        onclick={closeLightbox}
        aria-label="Close lightbox"
      ></button>

      <!-- Close button -->
      <button
        type="button"
        class="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
        onclick={closeLightbox}
        aria-label="Close lightbox"
      >
        <X class="size-6" />
      </button>

      <!-- Navigation arrows -->
      <button
        type="button"
        class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10 border border-white/20"
        onclick={lightboxPrev}
        aria-label="Previous image"
      >
        <ChevronLeft class="size-8" />
      </button>
      <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10 border border-white/20"
        onclick={lightboxNext}
        aria-label="Next image"
      >
        <ChevronRight class="size-8" />
      </button>

      <!-- Image -->
      <div class="relative z-10 max-w-[90vw] max-h-[90vh]">
        <img
          src={screenshots[lightboxSlide].src}
          alt={screenshots[lightboxSlide].caption}
          class="max-w-[90vw] max-h-[85vh] object-contain"
        />
        <!-- Caption -->
        <p class="text-white/80 text-center mt-4 px-4">
          {screenshots[lightboxSlide].caption}
        </p>
      </div>
    </div>
  {/if}

  <!-- Mobile Fullscreen Viewer -->
  {#if mobileFullscreenOpen}
    <div
      bind:this={fullscreenContainer}
      class="fixed inset-0 z-50 flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
    >
      <!-- Header with close button -->
      <div
        class="flex-shrink-0 flex items-center justify-between px-3 py-1 bg-black/80"
      >
        <span class="text-white/60 text-xs">
          {mobileFullscreenSlide + 1} / {screenshots.length}
        </span>
        <button
          type="button"
          class="p-1 rounded-full bg-white/10 text-white"
          onclick={closeMobileFullscreen}
          aria-label="Close fullscreen"
        >
          <X class="size-5" />
        </button>
      </div>

      <!-- Zoomable image container -->
      <div
        class="flex-1 overflow-auto touch-pan-x touch-pan-y touch-pinch-zoom"
        ontouchstart={handleFullscreenTouchStart}
        ontouchmove={handleFullscreenTouchMove}
        ontouchend={handleFullscreenTouchEnd}
        role="img"
        aria-label={screenshots[mobileFullscreenSlide].caption}
      >
        <img
          src={screenshots[mobileFullscreenSlide].src}
          alt={screenshots[mobileFullscreenSlide].caption}
          class="min-w-full h-auto"
        />
      </div>

      <!-- Caption bar -->
      <div class="flex-shrink-0 px-4 py-2 bg-black/80">
        <p class="text-white/80 text-center text-sm">
          {screenshots[mobileFullscreenSlide].caption}
        </p>
      </div>
    </div>
  {/if}
</section>
