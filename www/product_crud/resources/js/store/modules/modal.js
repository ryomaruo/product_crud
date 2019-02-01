const state = {
  selectedIndex: '',
  modalName: ''
}

const actions = {
  onClickDelete:  ({ commit }, index) => {
    commit('setSelectedIndex', {
      index: index
    })
    commit('setModalName', {
      modalName: 'deleteModal'
    })
  }
}
const mutations = {
  setSelectedIndex: (state, p) => {
    state.selectedIndex = p.index
  },
  setModalName: (state, p) => {
    state.modalName = p.modalName
  },
  resetSelectedIndex: (state) => {
    state.selectedIndex = ''
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}