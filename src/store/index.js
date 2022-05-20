import Vuex from "vuex";

const state = {
  isShowWriteLetterModal: false,
  isShowReadLetterModal: false,
  letters: [],
  totalElements: 0,
};

const mutations = {
  SET_OPEN_WRITE_MODAL(state, toggle) {
    state.isShowWriteLetterModal = toggle;
  },
  SET_OPEN_READ_MODAL(state, toggle) {
    state.isShowReadLetterModal = toggle;
  },
  SET_TOTAL_ELEMENTS(state, data) {
    state.totalElements = data;
  },
  SET_LETTERS(state, data) {
    state.letters = data;
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
