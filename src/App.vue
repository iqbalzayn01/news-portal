<script setup>
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';
</script>

<template>
  <div class="h-screen flex flex-col">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
