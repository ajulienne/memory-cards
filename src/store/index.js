import Vue from "vue";
import Vuex from "vuex";
import { createCard, deleteCard, getCards, updateCard } from "@/db/services";

import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
    ids: [],
    toast: null,
  },
  mutations: {
    getCards(state, payload) {
      state.cards = payload.cards;
      state.ids = payload.ids;
    },
    addCard(state, payload) {
      state.cards.push(payload.card);
      state.ids.push(payload.id);
    },
    deleteCard(state, payload) {
      state.cards = state.cards.filter((c) => c.id !== payload);
    },
    updateCard(state, payload) {
      state.cards = state.cards.map((c) =>
        c.id === payload.id ? { ...c, ...payload } : c
      );
    },
    addToast(state, payload) {
      state.toast = payload;
    },
    removeToast(state) {
      state.toast = null;
    },
  },
  actions: {
    add({ commit }, payload) {
      createCard(payload).then((data) => {
        commit("addCard", { card: payload, id: data });
        commit("addToast", {
          type: "success",
          message: "Card added!",
        });
        setTimeout(() => {
          commit("removeToast");
        }, 3000);
      });
    },
    remove({ commit }, payload) {
      deleteCard(payload).then(() => {
        commit("deleteCard", payload);
        router.push({ name: "CardList" });
        commit("addToast", {
          type: "success",
          message: "Card deleted!",
        });
        setTimeout(() => {
          commit("removeToast");
        }, 3000);
      });
    },
    update({ commit }, payload) {
      updateCard(payload.id, payload).then(() => {
        commit("updateCard", payload);
        commit("addToast", {
          type: "success",
          message: "Card updated!",
        });
        setTimeout(() => {
          commit("removeToast");
        }, 3000);
      });
    },
    get({ commit }) {
      getCards().then((data) => {
        commit("getCards", data);
      });
    },
    addToast({ commit }, payload) {
      commit("addToast", payload);
    },
    removeToast({ commit }) {
      commit("removeToast");
    },
  },
});

export default store;
