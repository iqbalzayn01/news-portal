<script setup>
import { ref, onMounted, watch } from 'vue';
import { getNews } from '../utils/services';
import { convertToReadableDatetime } from '../utils/helpers';
import SkeletonLoading from './SkeletonLoading.vue';

const query = ref('technology');
const newsList = ref([]);
const loading = ref(false);

const fetchNews = async () => {
  loading.value = true;
  try {
    newsList.value = await getNews(query.value);
  } catch (error) {
    console.error('Error fetching news:', error);
  } finally {
    loading.value = false;
  }
};

watch(query, () => {
  fetchNews();
});

const saveReadNews = (news) => {
  let readNews = JSON.parse(localStorage.getItem('readNews')) || [];

  const isAlreadySaved = readNews.some((item) => item.url === news.url);

  if (!isAlreadySaved) {
    readNews.push({
      title: news.title,
      url: news.url,
      urlToImage: news.urlToImage,
    });
    localStorage.setItem('readNews', JSON.stringify(readNews));
  }
};

onMounted(fetchNews);
</script>

<template>
  <div class="mx-5">
    <div class="border-2 border-zinc-800 mb-10 p-5 rounded-xl">
      <p class="text-lg text-white mb-5">Search News</p>
      <input
        name="search-news"
        v-model="query"
        @input="fetchNews"
        placeholder="Search news..."
        class="w-full bg-transparent text-white placeholder:text-zinc-600 border-2 border-zinc-800 rounded-lg p-3 outline-none"
      />
    </div>
    <SkeletonLoading v-if="loading" :loading="loading" />
    <!-- Display news from api -->
    <div
      v-else
      class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
    >
      <div
        v-for="(news, index) in newsList"
        :key="news.url"
        class="h-full flex flex-col gap-5 bg-transparent border-2 border-zinc-800 p-5 rounded-xl"
        :class="{
          'col-span-1 xl:col-span-2 row-span-2': index % 5 === 1,
        }"
      >
        <img
          :src="news.urlToImage"
          alt="news image"
          class="object-cover w-full h-full rounded-lg"
        />
        <div class="flex flex-col gap-3">
          <div class="mb-2">
            <p class="text-base font-bold text-white">Published</p>
            <p class="text-base text-white">
              {{ convertToReadableDatetime(news.publishedAt) }}
            </p>
          </div>
          <h3 class="text-2xl text-white font-bold">{{ news.title }}</h3>
          <p class="text-base text-white">{{ news.description }}</p>
          <div class="mt-2">
            <p class="text-base font-bold text-white">Author</p>
            <p class="text-base text-white">{{ news.author }}</p>
          </div>
        </div>
        <a
          :href="news.url"
          @click="saveReadNews(news)"
          class="bg-white text-base text-center text-black px-10 py-2 rounded-lg"
          >Read more</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
