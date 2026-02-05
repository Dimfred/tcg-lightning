<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { Component } from "svelte";

  type Props = {
    icon: Component;
    title: string;
    description: string;
  };

  let { icon: Icon, title, description }: Props = $props();
</script>

<Card.Root
  class="group hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
>
  <Card.Header>
    <div class="mb-4 text-primary">
      <Icon class="size-10" />
    </div>
    <Card.Title class="text-lg">{title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <Card.Description class="text-base leading-relaxed"
      >{description}</Card.Description
    >
  </Card.Content>
</Card.Root>
