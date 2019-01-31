import shop from '../../api/shop'

// initial state
const state = {
  products: []
}

// getters
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },

  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },

  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

// actions
const actions = {
  async initProducts ({ commit, dispatch, state }) {
    const products = await shop.fetchProducts()
    commit('setProducts', products)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
