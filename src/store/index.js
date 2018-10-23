import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerA: null,
    playerB: null,
  },
  getters: {
    getResultByPlayer: state => player => (state[player] ? state[player] : {}),
  },
  actions: {
    savePlayerA(context, payload) {
      context.commit('savePlayerAResult', payload);
    },
    savePlayerB(context, payload) {
      context.commit('savePlayerBResult', payload);
    },
  },
  mutations: {
    savePlayerAResult(state, payload) {
      state.playerA = payload;
    },
    savePlayerBResult(state, payload) {
      state.playerB = payload;
    },
  },
});
