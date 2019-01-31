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
  discontinuedProducts: state => {
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
    console.log('action newProduct');
    console.log(newProduct);
    
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
    console.log('state');
    console.log(state);
    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
