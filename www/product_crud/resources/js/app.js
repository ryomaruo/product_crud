import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h=>h(App),
  store,
  router
})