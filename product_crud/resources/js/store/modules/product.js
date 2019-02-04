import shop from '../../api/shop'
import router from '../../router'

const state = {
  product: {},
  maxLength: {
    name: 32,
    model_number: 50
  },
  isSubmitting: false
}

const getters = {
  newProduct (state, rootState) {
    return {
      name: '',
      model_number: '',
      price: '0',
      stock: '0',
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
  createProduct: async ({ commit , state }, product) => {
    // dummy image追加
    product.image_url = 'https://i.gyazo.com/57fc7fb20cc0e5669526f8524e56a5b1.jpg'
    const products = await shop.createProduct(product)    
    commit('products/setProducts', {
      products: products
    },
    {
      root: true
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
    router.push({
      path: '/products'
    })
  }
}

const mutations = {
  toggleSubmitting: (state, p) => {
    state.isSubmitting = p.bool
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}