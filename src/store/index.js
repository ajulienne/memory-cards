import Vue from "vue";
import Vuex from "vuex";
import card from "./modules/card";
import category from "./modules/category";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    card,
    category,
  },
});

export default store;
