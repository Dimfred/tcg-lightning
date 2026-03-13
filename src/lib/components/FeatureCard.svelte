<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { Component, SvelteComponent } from "svelte";
  import { reveal } from "$lib/reveal";

  type Props = {
    icon: Component<any> | typeof SvelteComponent<any>;
    title: string;
    description: string;
    delay?: number;
  };

  let { icon: Icon, title, description, delay = 0 }: Props = $props();
</script>

<div use:reveal={delay} class="h-full">
  <Card.Root
    class="group h-full hover:border-brand/50 transition-all duration-200 hover:shadow-lg hover:shadow-brand/5"
  >
    <Card.Header>
      <div class="mb-4 text-brand">
        <Icon class="size-10" />
      </div>
      <Card.Title class="text-lg">{title}</Card.Title>
    </Card.Header>
    <Card.Content>
      <Card.Description class="text-base leading-relaxed"
        >{@html description}</Card.Description
      >
    </Card.Content>
  </Card.Root>
</div>
