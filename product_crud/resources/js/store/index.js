import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import products from './modules/products'
import modal from './modules/modal'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    product,
    products,
    modal
  },
  strict: debug
})