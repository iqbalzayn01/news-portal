<script setup>
import ReadNews from '../components/ReadNews.vue';
import NewsList from '../components/NewsList.vue';
</script>

<template>
  <main class="container mx-auto">
    <div class="mb-10">
      <ReadNews />
      <h2 class="text-2xl text-white font-bold mx-5 mb-5">Discover</h2>
      <NewsList />
    </div>
  </main>
</template>

<style scoped></style>
