import { Store } from 'vuex';
import { State } from '@/shared/interfaces/store-types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
