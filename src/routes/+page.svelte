<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import DownloadSection from "$lib/components/DownloadSection.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>TCG Lightning - Free MTG Deck Builder | Magic: The Gathering</title>
  <meta
    name="description"
    content="Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall search. Desktop app for Windows and Linux."
  />
  <link rel="canonical" href="https://tcg-lightning.com/" />
  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"TCG Lightning","applicationCategory":"GameApplication","operatingSystem":"Windows, Linux","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"description":"Free Magic: The Gathering deck builder with AI assistance, EDHREC synergies, combo detection, and offline Scryfall card search.","url":"https://tcg-lightning.com/","downloadUrl":"https://github.com/dimfred/tcg-lightning/releases/latest"}</script>'}
  {@html '<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://tcg-lightning.com/"}]}</script>'}
</svelte:head>

<Hero />
<AboutSection />
<DownloadSection version={data.version} releases={data.releases} />
