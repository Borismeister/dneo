import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    time: 0,
    list: Array
  },
  mutations: {
    updateTime(state, payload) {
      state.time = payload;
    },
    updateList(state, payload) {
      state.list = payload;
    }
  },
  plugins: [createPersistedState()]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueMeta);
