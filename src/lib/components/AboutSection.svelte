<script lang="ts">
  import FeatureCard from "./FeatureCard.svelte";
  import {
    Sparkles,
    TrendingUp,
    Zap,
    Search,
    Library,
    Users,
  } from "lucide-svelte";
</script>

<section id="about" class="py-16 md:py-24">
  <div class="container mx-auto px-4">
    <!-- <div class="text-center mb-12"> -->
    <!--   <h2 class="text-3xl md:text-4xl font-bold mb-4"> -->
    <!--     Build Better Magic: The Gathering Decks -->
    <!--   </h2> -->
    <!--   <p class="text-lg text-muted-foreground max-w-2xl mx-auto"> -->
    <!--     Commander, Standard, Legacy, Modern or Pauper — build for the format of -->
    <!--     your choice -->
    <!--   </p> -->
    <!-- </div> -->

    <div
      class="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      <FeatureCard
        icon={Search}
        title="Offline Card Search"
        description="Full Scryfall database stored locally. Search thousands of cards instantly with advanced syntax — colors, types, oracle text, and more — all without internet."
        delay={0}
      />
      <FeatureCard
        icon={TrendingUp}
        title="EDHREC Synergies"
        description="See what thousands of successful decks run with real-time <span class='text-brand font-medium'>EDHREC</span> data. Synergy scores and inclusion rates help you find the perfect cards for your strategy."
        delay={100}
      />
      <FeatureCard
        icon={Zap}
        title="Automatic Combo Detection"
        description="Powered by <span class='text-brand font-medium'>Archidekt</span> Combo Spellbook — find combo lines already in your deck and discover what you're missing. Step-by-step explanations and add missing pieces with one click."
        delay={200}
      />
      <FeatureCard
        icon={Library}
        title="Collection Management"
        description="Track every card you own. Import your collection directly from <span class='text-brand font-medium'>Manabox</span> and keep it up to date as you buy and trade."
        delay={300}
      />
      <FeatureCard
        icon={Users}
        title="Share with Friends"
        description="Share your collection with friends so they can check if you own cards they need — or let them share theirs so you can do the same."
        delay={400}
      />
      <FeatureCard
        icon={Sparkles}
        title="AI Deck Assistant"
        description="Get card suggestions, tag your cards, and analyze synergies through conversation. Supports OpenAI, Anthropic, Ollama, and custom providers."
        delay={500}
      />
    </div>
  </div>
</section>
