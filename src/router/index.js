import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home.vue')},
    { path: '/kch', name: 'kch', component: () => import('@/pages/kch_page.vue')}
  ],
})

export default router;
