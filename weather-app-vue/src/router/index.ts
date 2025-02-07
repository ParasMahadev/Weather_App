import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CityDetails from '@/views/CityDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/city/:name', component: CityDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
