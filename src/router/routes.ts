import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing-page',
    component: () => import('@/views/landing-page/Index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFoundPage.vue'),
    name: 'Not-found-Page',
  },
];

export default routes;
