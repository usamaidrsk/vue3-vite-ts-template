import {
  GET_IS_AUTHENTICATED,
  SET_AUTH,
} from '@/shared/constants/store-constants';
import { AuthState } from '@/shared/interfaces/store-types';

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
  } as AuthState,
  getters: {
    [GET_IS_AUTHENTICATED](state: { isAuthenticated: boolean }) {
      return state.isAuthenticated && !!localStorage.getItem('access_token');
    },
  },
  mutations: {
    [SET_AUTH](
      state: AuthState,
      payload: { status: boolean; tokens?: { access: string; refresh: string } }
    ) {
      if (payload.status && payload.tokens) {
        localStorage.setItem('access_token', payload.tokens.access);
        localStorage.setItem('refresh_token', payload.tokens.refresh);
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      state.isAuthenticated = payload.status;
    },
  },
};
