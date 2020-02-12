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
    privateKeeps: []
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data
    },
    setPrivatKeeps(state, data) {
      state.privateKeeps = data
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

    // keeps
    async getPublicKeeps({ commit }) {
      let res = await _api.get('keeps')
      commit('setPublicKeeps', res.data)
    },
    async getCreatedKeeps({ commit }) {
      let res = await _api.get('keeps/private')
      commit('setPrivatKeeps', res.data)
    },
    async createKeep({ dispatch }, newData) {
      await _api.post('keeps', newData)
      dispatch('getCreatedKeeps')
    },
    async deleteKeep({ dispatch }, id) {
      await _api.delete('keeps/' + id)
      dispatch('getCreatedKeeps')
      dispatch('getPublicKeeps')
    }
  }
});
