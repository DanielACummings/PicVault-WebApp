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
    publicKeeps: []
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data
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
    }
  }
});
