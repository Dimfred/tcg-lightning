<script lang="ts">
  import "../app.css";
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/500.css";
  import "@fontsource/inter/600.css";
  import "@fontsource/inter/700.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  let { children } = $props();
</script>

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
