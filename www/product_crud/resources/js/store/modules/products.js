import shop from '../../api/shop'

// initial state
const state = {
  products: [],
  newProduct: {
    name: '',
    modelNumber: '',
    price: 0,
    stock: 0,
    discontinued: 0,
    description: ''
  },
  maxLength: {
    name: 32,
    modelNumber: 50
  },
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
  async deleteProduct({ commit , state}, index) {
    // TODO: isLoading追加
    const id = state.products[index].id
    await shop.deleteProducts()
    commit('deleteProduct', {
      index: index
    })
  },
  imageUrlAlt: ({ commit }, i) => {
    commit('updateInvalidImg', {
      index: i
    })
  },
  createProduct: ({ commit }, newProduct) => {
    commit('createProduct', {
      newProduct: newProduct
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
  },
  createProduct: (state, p) => {
    state.products.push(p.newProduct)
  },
  deleteProduct: (state, p) => {
    state.products.splice(p.index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
