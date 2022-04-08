<script setup>
  import thumbnailImg from "/src/archive/starter-code/assets/thumbnails/the-great-lands/regular/large.jpg";
  import movieIcon from "/src/archive/starter-code/assets/icon-category-movie.svg";

  import tvIcon from "/src/archive/starter-code/assets/icon-category-tv.svg";
  import playIcon from "/src/archive/starter-code/assets/icon-play.svg";
  import bookmarkEmptyIcon from "/src/archive/starter-code/assets/icon-bookmark-empty.svg";
  import bookmarkFilledIcon from "/src/archive/starter-code/assets/icon-bookmark-full.svg";

  defineProps({
    title: String,
    thumbnail: String,
    year: Number,
    category: String,
    rating: String,
    isBookmarked: Boolean,
  });

  console.log(thumbnail);
</script>

<template>
  <article class="group relative w-auto overflow-hidden rounded-lg">
    <img class="peer select-none" :src="require(thumbnail)" alt="" />
    <div class="card-bg absolute left-0 right-0 -bottom-full top-full flex items-center justify-center text-white transition-all group-hover:top-0 group-hover:bottom-0">
      <a href="" class="play-bg rounded-full p-2.5 align-baseline transition-all hover:scale-110">
        <img :src="playIcon" alt="" class="inline" />
        <span class="mx-2.5 font-Outfit text-lg font-medium">Play</span>
      </a>
      <img src="" alt="" />
    </div>
    <section class="card-gradient absolute bottom-0 left-0 right-0 flex max-h-[43%] flex-col items-start justify-center font-Outfit text-white">
      <p class="mb-1 text-base font-light">
        {{ year }} <span class="mx-2">&bull;</span>
        <img class="mr-1.5 inline h-3 w-3 align-baseline" v-if="category == 'Movie'" :src="movieIcon" alt="" />
        <img class="mr-1.5 inline h-3 w-3 align-baseline" v-else-if="category == 'TV Series'" :src="tvIcon" alt="" />
        {{ category }} <span class="mx-2">&bull;</span> {{ rating }}
      </p>
      <a href="">
        <h3 class="text-2xl font-medium text-white">{{ title }}</h3>
      </a>
    </section>
    <a href="">
      <section class="absolute top-2 right-2 block items-center justify-center rounded-full bg-dark-blue p-1.5 transition-all hover:scale-110">
        <img class="m-2 w-3" v-if="isBookmarked" :src="bookmarkFilledIcon" alt="" />
        <img class="m-2 w-3" v-else :src="bookmarkEmptyIcon" alt="" />
      </section>
    </a>
  </article>
</template>

<style>
  .card-gradient {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 75%);
  }
  .card-bg {
    background: rgba(0, 0, 0, 0.65);
  }
  .play-bg {
    background: rgba(200, 200, 200, 0.65);
  }
</style>
