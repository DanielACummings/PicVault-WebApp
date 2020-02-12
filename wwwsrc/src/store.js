import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ? "https://localhost:5001/" : "/";

let _api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    createdKeeps: [],
    vaults: []
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data
    },
    setCreatedKeeps(state, data) {
      state.createdKeeps = data
    },
    setVaults(state, data) {
      state.vaults = data
    }
  },
  actions: {
    // auth
    setBearer({ }, bearer) {
      _api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      _api.defaults.headers.authorization = "";
    },

    // vaults
    async getVaults({ commit }) {
      let res = await _api.get('vaults')
      commit('setVaults', res.data)
    },
    async createVault({ dispatch }, vaultData) {
      await _api.post('vaults', vaultData)
      dispatch('getVaults')
    },
    async deleteVault({ dispatch }, id) {
      await _api.delete('vaults/' + id)
      dispatch('getVaults')
    },

    // keeps
    async getPublicKeeps({ commit }) {
      let res = await _api.get('keeps')
      commit('setPublicKeeps', res.data)
    },
    async getCreatedKeeps({ commit }) {
      let res = await _api.get('keeps/created')
      commit('setCreatedKeeps', res.data)
    },
    async createKeep({ dispatch }, keepData) {
      await _api.post('keeps', keepData)
      dispatch('getCreatedKeeps')
    },
    async deleteKeep({ dispatch }, id) {
      await _api.delete('keeps/' + id)
      dispatch('getCreatedKeeps')
      dispatch('getPublicKeeps')
    }
  }
});
