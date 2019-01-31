const state = {
  modalName: ''
}

const actions = {
  showEditModal ({ commit }) {
    commit('setModal', 'EditModal')
  },
  showDelModal ({ commit }) {
    commit('setModal', 'DelModal')
  },
}

const mutations = {
  setModal (state, name) {
    state.modalName = name
  },
  hideModal (state) {
    state.modalName = ''
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}