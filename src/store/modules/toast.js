const state = {
  message: null,
  type: null
};

const mutations = {
  addToast(state, payload) {
    state.message = payload.message;
    state.type = payload.type;
  },
  removeToast(state) {
    state.message = null;
    state.type = null;
  },
}

const actions = {
  addToast({commit}, toast) {
    commit("addToast", toast);
    setTimeout(() => {
      commit("removeToast");
    }, 3000);
  }
}

export default {
  state,
  mutations,
  actions
}