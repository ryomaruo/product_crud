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
    console.log('state.products.length');
    console.log(state.products.length);
    
    return state.products.length > 0;
  },
  discontinuedProducts (state) {
    return state.products.filter(product => product.discontinued)
  }
}

// actions
const actions = {
  async initProducts ({ commit }) {
    const products = await shop.fetchProducts()
    commit('setProducts', {
      products: products
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
