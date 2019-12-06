/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';

import { getUserInfos } from '../helpers/twitch';

Vue.use(Vuex);

const state = {
  loading: false,
  isLogged: false,
  user: {},
  authInfos: {},
};

const mutations = {
  setIsLogged(state, value) {
    state.isLogged = value;
  },
  setLoading(state, value) {
    state.loading = !!value;
  },
  setAuthInfo(state, twitchInformations) {
    state.authInfos = twitchInformations;
  },
  setUserInfos(state, user) {
    state.user = user;
  },
};

const actions = {
  setAuthInfo({ commit, dispatch }, twitchInformations) {
    commit('setLoading', true);
    commit('setAuthInfo', twitchInformations);
    dispatch('getUserInfos');
    commit('setLoading', false);
  },
  async getUserInfos({ commit }) {
    commit('setLoading', true);
    const twitchUserInformations = await getUserInfos(state.authInfos.access_token);
    commit('setUserInfos', twitchUserInformations);
    commit('setIsLogged', true);
    commit('setLoading', false);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
