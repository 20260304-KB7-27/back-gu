import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/kch',
      name: 'kch',
      component: () => import('@/pages/kch_page.vue'),
    },
    {
      path: '/kth',
      name: 'kth',
      component: () => import('@/pages/kth_page.vue'),
    },
    {
      path: '/knh',
      name: 'knh',
      component: () => import('@/pages/knh_page.vue'),
    },
    {
      path: '/kjy',
      name: 'kjy',
      component: () => import('@/pages/KimJuyoung.vue'),
    },
  ],
});

export default router;
