import Vue from 'vue';
import Vuex from 'vuex';

import PersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quantity: 0,
  },
  mutations: {
    add(state, ammount) {
      state.quantity += ammount;
    },

  },
  actions: {
    addQuantity({ commit }, ammount) {
      commit('add', ammount);
    },
  },
  plugins: [
    PersistedState({
      key: 'birrometro-state',
    }),
  ],
});
