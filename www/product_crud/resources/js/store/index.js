import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import modals from './modules/modals'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products,
    modals
  },
  strict: debug
})