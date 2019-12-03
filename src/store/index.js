/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';
import { OAuth } from '../helpers/twitch';

// import { Authenticate } from '../helpers/twitch';

Vue.use(Vuex);

const state = {
  loading: false,
  user: {},
};

const mutations = {
  setLoading(state, value) {
    state.loading = !!value;
  },
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  async Authenticate({ state, commit }) {
    commit('setLoading', true);
    console.log('authing', state);
    const user = OAuth();
    commit('setUser', user);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
