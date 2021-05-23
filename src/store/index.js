import Vue from "vue";
import Vuex from "vuex";
import {
  Login
} from "@/api/all"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  getters: {
    isCollapse: state => state.isCollapse
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    login(content, requestData) {
      return new Promise((resolve, reject) => {
        Login(requestData).then((respone) => {
          resolve(respone)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {},
});