import Vue from "vue";
import Vuex from "vuex";
import { createCard, deleteCard, getCards, updateCard } from "@/db/services";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    getCards(state, payload) {
      state.cards = payload;
    },
    addCard(state, payload) {
      state.cards.push(payload);
    },
    deleteCard(state, payload) {
      state.cards = state.cards.filter((c) => c.id !== payload);
    },
    updateCard(state, payload) {
      state.cards = state.cards.map((c) =>
        c.id === payload.id ? { ...c, ...payload } : c
      );
    },
  },
  actions: {
    add({ commit }, payload) {
      createCard(payload).then((data) => {
        commit("addCard", data);
      });
    },
    remove({ commit }, payload) {
      deleteCard(payload).then(() => {
        commit("deleteCard", payload);
      });
    },
    update({ commit }, payload) {
      updateCard(payload.id, payload).then(() => {
        commit("updateCard", payload);
      });
    },
    get({ commit }) {
      getCards().then((data) => {
        commit("getCards", data);
      });
    },
  },
});

export default store;
