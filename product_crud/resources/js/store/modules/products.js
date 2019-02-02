import shop from '../../api/shop'

// initial state
const state = {
  products: [],
  altImage: 'https://i.gyazo.com/0ba231479a5db2b2664fc81e184f2591.png'
}

// getters
const getters = {
  isExistProducts (state) {
    return state.products.length > 0;
  },
  discontinuedProducts (state) {
    return state.products.filter(product => product.discontinued)
  }
}

// actions
const actions = {
  // TODO: isLoading追加
  async initProducts({ commit }) {
    const products = await shop.fetchProducts()
    commit('setProducts', {
      products: products
    })
  },
  addProduct: ({ commit , state , rootState }) => {
    commit('addProduct', {
      product: rootState.product.product
    })
  },
  async deleteProduct({ commit , state }, index) {
    // TODO: isLoading追加
    const id = state.products[index].id
    const products = await shop.deleteProducts(id, state.products)
    commit('setProducts', {
      products: products
    })
  },
  imageUrlAlt: ({ commit }, i) => {
    commit('updateInvalidImg', {
      index: i
    })
  },
}

// mutations
const mutations = {
  setProducts: (state, p) => {
    state.products = p.products
    
  },
  addProduct: (state, p) => {
    state.products.push(p.product)
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
