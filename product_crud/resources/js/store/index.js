import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import products from './modules/products'
import modal from './modules/modal'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue);

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  isLoading: false
}

const getters = {
  wrapperHeight(state) {
    return (!state.isLoading)? 'auto':'100%'
  }
}

const mutations = {
  toggleLoading: (state, p) => {
    state.isLoading = p.bool
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    product,
    products,
    modal
  },
  strict: debug
})