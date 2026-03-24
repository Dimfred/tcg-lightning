<script lang="ts">
  import "../app.css";
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/600.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let { children } = $props();

  let hasMounted = $state(false);
  onMount(() => {
    hasMounted = true;
  });

  const GRID = 64;
  let highlightStyle = $state("");
  let highlightVisible = $state(false);

  function isOverComponent(el: HTMLElement | null): boolean {
    while (el) {
      if (el.dataset?.gridIgnore !== undefined) return false;
      const tag = el.tagName;
      if (tag === "BUTTON" || tag === "A" || tag === "IMG") return true;
      const role = el.getAttribute("role");
      if (role === "button" || role === "dialog" || role === "region")
        return true;
      if (el.classList.contains("card") || el.closest("[data-slot='card']"))
        return true;
      el = el.parentElement;
    }
    return false;
  }

  function handleMouseMove(e: MouseEvent) {
    const x = Math.floor(e.pageX / GRID) * GRID;
    const y = Math.floor(e.pageY / GRID) * GRID;
    highlightStyle = `left:${x}px;top:${y}px;`;
    highlightVisible = !isOverComponent(e.target as HTMLElement);
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="min-h-dvh flex flex-col font-sans grid-pattern relative"
  style="font-family: 'Inter', system-ui, sans-serif;"
  onmousemove={handleMouseMove}
>
  <div
    class="pointer-events-none absolute w-[64px] h-[64px] bg-foreground/5 transition-opacity duration-150 z-0 {highlightVisible
      ? 'opacity-100'
      : 'opacity-0'}"
    style={highlightStyle}
  ></div>
  <Navigation />
  {#key $page.url.pathname}
    <main
      class="flex-1"
      in:fade={{ duration: hasMounted ? 200 : 0, delay: hasMounted ? 200 : 0 }}
      out:fade={{ duration: hasMounted ? 200 : 0 }}
    >
      {@render children()}
    </main>
  {/key}
  <footer class="border-t border-border py-6">
    <div
      class="container mx-auto px-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
    >
      <a href="/blog" class="hover:text-brand transition-colors">Blog</a>
      <a href="/wiki" class="hover:text-brand transition-colors">Wiki</a>
      <a
        href="https://github.com/dimfred/tcg-lightning"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-brand transition-colors">GitHub</a
      >
      <a
        href="https://discord.gg/vGpqEcxzRG"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-brand transition-colors">Discord</a
      >
      <a href="/privacy" class="hover:text-brand transition-colors"
        >Privacy Policy</a
      >
    </div>
  </footer>
</div>
