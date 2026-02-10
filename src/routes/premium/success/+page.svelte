<script lang="ts">
  import { asset } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import { Heart, ArrowLeft, Zap } from "lucide-svelte";
</script>

<svelte:head>
  <title>Thank You! - TCG Lightning</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section
  class="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center py-20 overflow-hidden"
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
    <div class="max-w-2xl mx-auto space-y-8">
      <!-- Icon -->
      <div class="flex justify-center">
        <div class="relative">
          <div
            class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Heart class="size-12 text-primary" fill="currentColor" />
          </div>
          <div
            class="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center"
          >
            <Zap class="size-4 text-chart-1" fill="currentColor" />
          </div>
        </div>
      </div>

      <!-- Heading -->
      <div class="space-y-4">
        <h1 class="text-3xl md:text-5xl font-bold text-foreground">
          Thank You!
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground">
          Your premium subscription means the world to us.
        </p>
      </div>

      <!-- Message -->
      <div
        class="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4 text-left"
      >
        <p class="text-muted-foreground leading-relaxed">
          By subscribing to <span class="text-foreground font-medium">TCG Lightning Premium</span>,
          you're directly supporting the development of this project. Your contribution
          helps keep the app free for everyone and allows us to keep building new features.
        </p>
        <p class="text-muted-foreground leading-relaxed">
          We're a small team passionate about making the best MTG deck building
          experience possible — and supporters like you make that happen.
        </p>
        <p class="text-lg text-foreground font-medium">
          Seriously, thank you.
        </p>
      </div>

      <!-- Back button -->
      <div class="pt-4">
        <Button size="lg" href="/" class="min-w-[180px] text-base">
          <ArrowLeft class="size-5" />
          Back to Home
        </Button>
      </div>
    </div>
  </div>
</section>
