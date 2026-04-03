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
      path: '/2',
      name: 'kch',
      component: () => import('@/pages/kch_page.vue'),
    },
    {
      path: '/3',
      name: 'kth',
      component: () => import('@/pages/kth_page.vue'),
    },
    {
      path: '/4',
      name: 'knh',
      component: () => import('@/pages/knh_page.vue'),
    },
    {
      path: '/1',
      name: 'kjy',
      component: () => import('@/pages/KimJuyoung.vue'),
    },
    {
      path: '/:paths(.*)*',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
});

export default router;
