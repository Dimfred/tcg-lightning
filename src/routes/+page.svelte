<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import DownloadSection from "$lib/components/DownloadSection.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>TCG Lightning - Fast Modern MTG Deck Builder</title>
</svelte:head>

<Hero />
<AboutSection />
<DownloadSection
  version={data.version}
  releaseNotes={data.releaseNotes}
  allReleaseNotes={data.allReleaseNotes}
/>
