<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="container mx-auto">
    <div
      class="flex flex-col md:flex-row items-center gap-10 mx-5 my-5 rounded-xl"
    >
      <RouterLink to="/" class="w-fit">
        <h1 class="w-fit text-5xl text-white font-extrabold">News Portal</h1>
      </RouterLink>
      <nav class="flex gap-2">
        <RouterLink
          to="/"
          class="w-full h-fit hover:bg-zinc-800 flex items-center justify-center text-sm text-white font-medium px-5 py-2 rounded-lg"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/news"
          class="w-full h-fit hover:bg-zinc-800 flex items-center justify-center text-sm text-white font-medium px-5 py-2 rounded-lg"
        >
          News
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
