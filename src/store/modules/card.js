const {
  getRandomCard,
  deleteCard,
  updateCard,
  createCard,
} = require("../../db/services");

const state = {
  data: null,
  loading: false,
  error: null,
};

const mutations = {
  getCard(state) {
    state.loading = true;
  },
  getCardSuccess(state, payload) {
    state.loading = false;
    state.data = payload;
  },
  getCardFailure(state, payload) {
    state.loading = false;
    state.error = payload;
  },
  deleteCard(state) {
    state.data = null;
  },
  updateCard(state, payload) {
    state.data = payload;
  },
  createCard(state, payload) {
    state.data = payload;
  },
};

const actions = {
  getRandomCard({ commit }, payload) {
    commit("getCard");
    getRandomCard(payload.categoryId, payload.currentId)
      .then((data) => {
        commit("getCardSuccess", data);
      })
      .catch((err) => {
        commit("getCardFailure", err);
      });
  },
  getCard({ commit }, id) {
    commit("getCard");
    this.getCard(id)
      .then((data) => {
        commit("getCardSuccess", data);
      })
      .catch((err) => {
        commit("getCardFailure", err);
      });
  },
  createCard({ commit }, card) {
    createCard(card).then((data) => {
      commit("createCard", { id: data, ...card });
    });
  },
  deleteCard({ commit }, id) {
    deleteCard(id).then(() => {
      commit("deleteCard");
    });
  },
  updateCard({ commit }, card) {
    updateCard(card.id, card).then((data) => {
      commit("updateCard", data);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
