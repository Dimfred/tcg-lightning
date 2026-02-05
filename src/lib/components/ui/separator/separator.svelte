<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
  };

  let {
    ref = $bindable(null),
    class: className,
    orientation = "horizontal",
    decorative = true,
    ...restProps
  }: Props = $props();
</script>

<div
  bind:this={ref}
  data-slot="separator"
  role={decorative ? "none" : "separator"}
  aria-orientation={decorative ? undefined : orientation}
  data-orientation={orientation}
  class={cn(
    "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:min-h-full data-[orientation=vertical]:w-px",
    className,
  )}
  {...restProps}
/>
