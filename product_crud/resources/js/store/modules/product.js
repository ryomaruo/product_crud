import axios from 'axios';

const state = {
  product: {},
  maxLength: {
    name: 32,
    modelNumber: 50
  }
}

const actions = {
  createProduct: ({ commit , state }) => {
    commit('setProduct', {
      product: state.product
    })
  },
  initEditingProduct: ({ commit , state, rootState }, id) => {
    commit('setProduct', {
      product: rootState.products.products.find(item => item.id === id)
    })
  },
}

const mutations = {
  initProduct: (state) => {
    state.product = {
      name: '',
      modelNumber: '',
      price: 0,
      stock: 0,
      discontinued: 0,
      description: ''
    }
  },
  setProduct: (state, p) => {
    state.product = p.product
  },
  updateProduct: (state) => {

  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}