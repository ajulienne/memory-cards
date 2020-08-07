import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../../db/services";
import Vue from "vue";

const state = {
  current: null,
  list: null,
  loading: false,
  error: null,
};

const mutations = {
  getCategories(state) {
    state.loading = true;
  },
  getCategoriesSuccess(state, payload) {
    state.loading = false;
    state.list = payload;
  },
  getCategoriesFailure(state, payload) {
    state.loading = false;
    state.error = payload;
  },
  createCategory(state, payload) {
    if (state.list) {
      state.list.push(payload);
    } else {
      state.list = [payload];
    }
  },
  deleteCategory(state, id) {
    state.list = state.list.filter((c) => +c.id !== +id);
  },
  selectCategory(state, id) {
    state.current = state.list.find((c) => +c.id === +id);
  },
};

const actions = {
  getCategories({ commit }) {
    commit("getCategories");
    getCategories()
      .then((data) => {
        commit("getCategoriesSuccess", data);
      })
      .catch((err) => {
        commit("getCategoriesFailure", err);
      });
  },
  createCategory({ commit }, category) {
    createCategory(category).then((id) => {
      Vue.$toast.success("Category created!");
      commit("createCategory", { id, ...category });
    });
  },
  deleteCategory({ commit }, id) {
    deleteCategory(id).then(() => {
      Vue.$toast.success("Category deleted!");
      commit("deleteCategory", id);
    });
  },
  selectCategory({ commit }, id) {
    Vue.$toast.success("Category updated!");
    commit("selectCategory", id);
  },
};

export default {
  state,
  mutations,
  actions,
};
