import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ? "https://localhost:5001/" : "/";

let _api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 10000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    // vaults
    activeVault: {},
    vaults: [],

    //keeps
    activeKeep: {},
    keepsInVault: [],
    publicKeeps: [],
    createdKeeps: []
  },
  mutations: {
    // keeps
    addKeepToVault(state, data) {
      state.keepsInVault.push(data)
    },
    setKeepsInVault(state, data) {
      state.keepsInVault = data
    },
    setPublicKeeps(state, data) {
      state.publicKeeps = data
    },
    setCreatedKeeps(state, data) {
      state.createdKeeps = data
    },

    // vaults
    setActiveVault(state, data) {
      state.activeVault = data
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

    // vaultKeeps
    async createVaultKeep({ commit }, addData) {
      let res = await _api.post('vaultkeeps', addData)
      commit('addKeepToVault', res.data)
    },
    async deleteVaultKeep({ dispatch }, deleteData) {
      await _api.delete('vaultKeeps/' + deleteData.vaultId + '/keeps/' + deleteData.keepId, deleteData)
      dispatch('getKeepsInVault', deleteData.vaultId)
    },

    // #region - vaults
    async getActiveVault({ commit }, vaultId) {
      let res = await _api.get('vaults/' + vaultId)
      commit('setActiveVault', res.data)
    },
    async getVaults({ commit }) {
      let res = await _api.get('vaults')
      commit('setVaults', res.data)
    },
    async createVault({ dispatch }, vaultData) {
      await _api.post('vaults', vaultData)
      dispatch('getVaults')
    },
    async editVault({ dispatch }, vaultData) {
      await _api.put('vaults/' + vaultData.id, vaultData)
      dispatch("getActiveVault", vaultData.id)
    },
    async deleteVault({ dispatch }, id) {
      await _api.delete('vaults/' + id)
      dispatch('getVaults')
    },
    // #endregion

    // #region keeps
    async getPublicKeeps({ commit }) {
      let res = await _api.get('keeps')
      commit('setPublicKeeps', res.data)
    },
    async getCreatedKeeps({ commit }) {
      let res = await _api.get('keeps/created')
      commit('setCreatedKeeps', res.data)
    },
    async getKeepsInVault({ commit }, vaultId) {
      let res = await _api.get('vaultkeeps/' + vaultId + '/keeps')
      commit('setKeepsInVault', res.data)
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
    // #endregion
  }
});
