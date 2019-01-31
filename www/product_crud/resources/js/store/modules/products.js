import shop from '../../api/shop'

// initial state
const state = {
  products: [],
  altImage: 'https://i.gyazo.com/0ba231479a5db2b2664fc81e184f2591.png'
}

// getters
const getters = {
  discontinuedProducts: state => {
    return state.products.filter(product => product.discontinued)
  }
}

// actions
const actions = {
  async initProducts ({ commit, dispatch, state }) {
    const products = await shop.fetchProducts()
    commit('setProducts', {
      products: products
    })
  },
  imageUrlAlt: ({ commit, dispatch, state }, i) => {
    commit('updateInvalidImg', {
      index: i
    })
  }
}

// mutations
const mutations = {
  setProducts: (state, p) => {
    state.products = p.products
  },
  updateInvalidImg:  (state, p) => {
    state.products[p.index].image_url = state.altImage
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
