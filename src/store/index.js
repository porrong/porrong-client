import router from "@/router";
import Vuex from "vuex";

const state = {
  isShowWriteLetterModal: false,
  isShowReadLetterModal: false,
  token: ''
};

const mutations = {
  SET_OPEN_WRITE_MODAL(state, toggle) {
    state.isShowWriteLetterModal = toggle;
  },
  SET_OPEN_READ_MODAL(state, toggle) {
    state.isShowReadLetterModal = toggle;
  },
  LOGIN: function(state, payload) {
    state.token = payload.token
  },
  LOGIN_CHECK: function(state) {
    if(!state.token) {
      router.push({
        name: 'login'
      }).catch(error => {
        console.log(error)
      })
    }
  }
};

const store = new Vuex.Store({
  state,
  mutations,
});

export default store;
