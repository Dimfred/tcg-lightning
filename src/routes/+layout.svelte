<script lang="ts">
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen flex flex-col font-sans"
  style="font-family: 'Inter', system-ui, sans-serif;"
>
  <Navigation />
  {#key $page.url.pathname}
    <main class="flex-1" in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
      {@render children()}
    </main>
  {/key}
  <footer class="border-t border-border py-8">
    <div
      class="container mx-auto px-4 text-center text-sm text-muted-foreground"
    >
      <p>Built with Tauri, SvelteKit & AI.</p>
    </div>
  </footer>
</div>
