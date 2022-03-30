import Vuex from 'vuex'

const state = {
    isShowModal: false
}

const mutations = {
    SET_OPEN_MODAL(state, toggle) {
        state.isShowModal = toggle
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store