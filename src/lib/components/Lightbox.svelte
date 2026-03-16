<script lang="ts">
  import { X } from "lucide-svelte";

  let {
    src,
    alt,
    class: className = "",
    width,
    height,
  }: {
    src: string;
    alt: string;
    class?: string;
    width?: number;
    height?: number;
  } = $props();

  let open = $state(false);

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") open = false;
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<button
  type="button"
  class="cursor-zoom-in {className}"
  onclick={() => (open = true)}
  aria-label="View image in full size"
>
  <img
    {src}
    {alt}
    {width}
    {height}
    class="w-full rounded-lg border border-border"
    loading="lazy"
  />
</button>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-label="Image lightbox"
  >
    <button
      type="button"
      class="absolute inset-0 bg-black/90 cursor-default"
      onclick={() => (open = false)}
      aria-label="Close lightbox"
    ></button>

    <button
      type="button"
      class="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
      onclick={() => (open = false)}
      aria-label="Close lightbox"
    >
      <X class="size-6" />
    </button>

    <img
      {src}
      {alt}
      class="relative z-10 max-w-[90vw] max-h-[90vh] object-contain"
    />
  </div>
{/if}
