<script setup>
import { ref, onMounted } from 'vue';
import SkeletonLoading from './SkeletonLoading.vue';

const loading = ref(true);
const readNewsList = ref([]);

const loadReadNews = () => {
  readNewsList.value = JSON.parse(localStorage.getItem('readNews')) || [];
  loading.value = false;
};

onMounted(() => {
  loadReadNews();
});
</script>

<template>
  <main
    class="bg-transparent border-2 border-zinc-800 p-5 mx-5 my-5 rounded-xl"
  >
    <h2 class="text-2xl text-white font-bold mb-5">Read News</h2>
    <SkeletonLoading v-if="loading" :loading="loading" />
    <!-- Display news from localStorage -->
    <div
      v-if="readNewsList.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
    >
      <div
        v-for="news in readNewsList"
        :key="news.url"
        class="flex flex-col justify-between gap-5 bg-transparent border-2 border-zinc-800 p-5 rounded-xl"
      >
        <div class="flex flex-col gap-3">
          <img
            :src="news.urlToImage"
            alt="news image"
            class="object-cover w-full h-[200px] rounded-lg"
          />
          <h3 class="text-xl text-white font-bold">{{ news.title }}</h3>
        </div>
        <a
          :href="news.url"
          class="bg-white text-base text-center text-black px-10 py-2 rounded-lg"
          >Read again</a
        >
      </div>
    </div>

    <div v-else v-if="!loading">
      <p class="text-white">No news has been read yet.</p>
    </div>
  </main>
</template>

<style scoped></style>
