<script setup>
import image from "/src/assets/icon-search.svg";
defineProps({
  placeholder: String,
});
</script>

<template>
  <div class="flex items-center font-Outfit">
    <img
      :src="image"
      class="pointer-events-none mr-6 h-6 w-6 text-gray-400 md:h-8 md:w-8"
      aria-hidden="true"
    />
    <div class="relative inline w-full">
      <input
        id="email"
        name="email"
        type="text"
        class="
          peer
          h-10
          w-full
          border-b-2 border-transparent
          bg-transparent
          text-2xl text-pure-white
          placeholder-transparent
          caret-fruit-red
          focus:border-gray-300
          focus:outline-none
          peer-placeholder-shown:border-transparent
        "
        :placeholder="placeholder"
      />
      <label
        for="email"
        class="
          absolute
          left-0
          -top-7
          text-lg text-transparent
          transition-all
          peer-placeholder-shown:top-1
          peer-placeholder-shown:text-2xl
          peer-placeholder-shown:text-white
          peer-placeholder-shown:text-opacity-50
          peer-focus:-top-7
          peer-focus:text-lg
          peer-focus:text-white
          peer-focus:text-opacity-100
        "
        >{{ placeholder }}</label
      >
    </div>
  </div>
</template>
