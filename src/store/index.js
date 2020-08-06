import Vue from "vue";
import Vuex from "vuex";
import card from "./modules/card"
import category from "./modules/category"
import toast from "./modules/toast"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    card,
    category,
    toast
  }
});

export default store;
