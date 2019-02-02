import shop from '../../api/shop'

const state = {
  product: {},
  maxLength: {
    name: 32,
    model_number: 50
  }
}

const getters = {
  newProduct (state, rootState) {
    return {
      name: '',
      model_number: '',
      price: 0,
      stock: 0,
      discontinued: 0,
      description: ''
    }
  },
  editingProduct (state, getters, rootState) {
    return async (id) => {
      if (rootState.products.products.length == 0) {
        return await shop.fetchProduct(id)
      }
      const product = rootState.products.products.find(item => item.id == id)
      return Object.assign({}, product)
    }
  }
}

const actions = {
  createProduct: ({ commit , state }, product) => {
    commit('setProduct', {
      product: product
    })
  },
  updateProduct: async ({ commit , state }, product) => {
    const products = await shop.updateProduct(product)
    
    commit('products/setProducts', {
      products: products
    },
    {
      root: true
    })
  }
}

const mutations = {
  setProduct: (state, p) => {
    state.product = p.product
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