/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loading: false,
  isLogger: false,
  user: {},
};

const mutations = {
  setLoading(state, value) {
    state.loading = !!value;
  },
  setAccessToken(state, token) {
    state.token = token;
  },
};

const actions = {
  async setAccessToken({ commit }, token) {
    commit('setAccessToken', token);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
