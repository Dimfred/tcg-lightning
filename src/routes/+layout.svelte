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
      in:fade={{ duration: 200, delay: 200 }}
      out:fade={{ duration: 200 }}
    >
      {@render children()}
    </main>
  {/key}
</div>
