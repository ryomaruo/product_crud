import shop from '../../api/shop'

// initial state
const state = {
  products: [],
  altImage: 'https://i.gyazo.com/0ba231479a5db2b2664fc81e184f2591.png',
  isLoading: false
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
  async initProducts({ commit , state }) {
    if (state.products.length > 0) {
      return true;
    }
    const products = await shop.fetchProducts()
    commit('setProducts', {
      products: products
    })
  },
  async addProduct ({ commit , state , rootState }) {
    commit('addProduct', {
      product: rootState.product.product
    })
  },
  async deleteProduct({ commit , state }, index) {
    const id = state.products[index].id
    // TODO: deleteの405エラーが解消したらproductsが返ってくるので、products取得し直す必要ない。
    await shop.deleteProducts(id, state.products)
    alert(state.products[id].name + 'を削除しました。')
    const products = await shop.fetchProducts()
    commit('setProducts', {
      products: products
    })
  },
  imageUrlAlt ({ commit }, i) {
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
  updateInvalidImg: (state, p) => {
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
