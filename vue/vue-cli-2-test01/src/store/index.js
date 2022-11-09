import Vue from "vue";
import Vuex from "vuex";
import getters from './getter'
import user from './modules/user'
import blog from "@/store/modules/blog";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    blog
  },
  getters
});

export default store;
