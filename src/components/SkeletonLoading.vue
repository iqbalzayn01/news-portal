<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    v-if="loading"
    class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
  >
    <div
      v-for="index in 10"
      :key="index"
      class="h-full flex flex-col gap-5 bg-transparent border border-zinc-800 p-5 rounded-xl"
      :class="{
        'col-span-2 row-span-2': index % 5 === 2,
      }"
    >
      <div class="w-full h-full bg-zinc-600 skeleton-loading-animation"></div>
      <div
        class="w-[60%] h-[60px] bg-zinc-600 skeleton-loading-animation"
      ></div>
      <div
        class="w-[80%] h-[15px] bg-zinc-600 skeleton-loading-animation"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
