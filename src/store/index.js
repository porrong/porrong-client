import Vuex from "vuex";

const state = {
  isShowWriteLetterModal: false,
  isShowReadLetterModal: false
};

const mutations = {
  SET_OPEN_WRITE_MODAL(state, toggle) {
    state.isShowWriteLetterModal = toggle;
  },
  SET_OPEN_READ_MODAL(state, toggle) {
    state.isShowReadLetterModal = toggle;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
});

export default store;
