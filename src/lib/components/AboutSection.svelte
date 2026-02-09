<script lang="ts">
  import FeatureCard from "./FeatureCard.svelte";
  import { Sparkles, TrendingUp, Zap, Search } from "lucide-svelte";
</script>

<section id="about" class="py-16 md:py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Build Better Magic: The Gathering Decks</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Commander, Standard, Legacy, Modern or Pauper — build for the format of your choice
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <FeatureCard
        icon={Sparkles}
        title="AI Deck Assistant"
        description="Chat with an MTG expert powered by your choice of LLM. Get card suggestions, analyze synergies, and learn Scryfall syntax through conversation. Supports OpenAI, Anthropic, Ollama, and custom providers."
      />
      <FeatureCard
        icon={TrendingUp}
        title="Data-Driven Synergies"
        description="Discover what thousands of successful decks run with real-time EDHREC data. See synergy scores and inclusion rates to find the perfect cards for your strategy."
      />
      <FeatureCard
        icon={Zap}
        title="Automatic Combo Detection"
        description="Find powerful combo lines already in your deck and discover what you're missing. Get step-by-step explanations and add missing pieces with one click."
      />
      <FeatureCard
        icon={Search}
        title="Offline Performance"
        description="Full Scryfall database stored locally. Search thousands of cards instantly with advanced syntax—colors, types, oracle text, and more—all without internet."
      />
    </div>
  </div>
</section>
