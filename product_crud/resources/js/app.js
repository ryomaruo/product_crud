import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas)

new Vue({
  el: '#app',
  render: h=>h(App),
  store,
  router
})