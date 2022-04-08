<script setup>
  import TrendingCard from "./TrendingCard.vue";
  import SectionTitle from "./SectionTitle.vue";
  import json from "/src/assets/data.json";

  import { ref, computed } from "vue";

  // a computed ref
  const trendingMedia = computed(() => {
    return json.filter((x) => x.isBookmarked === true);
  });
  console.log(trendingMedia.value);

  console.log(trendingMedia.value[0]);
  const count = ref(4);
</script>

<template>
  <div class="app">
    <SectionTitle title="Trending" />
    <div class="overflow-x-scroll">
      <div class="hs w-full">
        <TrendingCard v-for="video in trendingMedia" :year="video.year" :category="video.category" :rating="video.rating" :title="video.title" :thumbnail="video.thumbnail.regular.large" />
      </div>
    </div>
  </div>
</template>

<style>
  .gridSlider {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
  }
  .gridSlider > * {
    grid-column: 2 / -2;
  }
  .gridSlider > .full {
    grid-column: 1 / -1;
  }
  .hs {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(v-bind("trendingMedia.length"), 50%);
    gap: 10px;
    grid-auto-flow: column;
  }
</style>
