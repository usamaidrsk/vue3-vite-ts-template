import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next(async (vm) => {
    if (!vm.$store.state?.auth?.isAuthenticated) {
      await vm.$router.push({
        path: '/signin',
        query: {
          from: vm.$router.options?.history?.location || '/',
        },
      });
    } else {
      next();
    }
  });
});

export default router;
