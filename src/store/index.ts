import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from '@/shared/interfaces/store-types';
import AuthModule from './modules/auth';
import spinnerModule from './modules/spinner';
import createPersistedState from 'vuex-persistedstate';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: false,
  modules: {
    auth: AuthModule,
    spinner: spinnerModule,
  },
  plugins: [createPersistedState()],
});

export function useStore() {
  return baseUseStore(key);
}

export * as auth from './modules/auth';
export * as spinner from './modules/spinner';
