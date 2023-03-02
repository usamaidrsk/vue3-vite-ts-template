import VueRouter from 'vue-router';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
  }
}
