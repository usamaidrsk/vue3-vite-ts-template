import {
  GET_SPINNER_STATUS,
  SET_SPINNER_STATUS,
} from '@/shared/constants/store-constants';

export default {
  namespaced: true,
  state: {
    isSpinning: false,
  },
  getters: {
    [GET_SPINNER_STATUS](state: { isSpinning: boolean }) {
      return state.isSpinning;
    },
  },
  mutations: {
    [SET_SPINNER_STATUS](state: { isSpinning: boolean }, payload: boolean) {
      state.isSpinning = payload;
    },
  },
};
