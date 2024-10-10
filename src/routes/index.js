import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import NewsView from '../views/NewsView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/news',
    component: NewsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
