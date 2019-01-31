import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Products from './components/Products.vue'
import ProductList from './components/ProductList.vue'
import CreateProduct from './components/CreateProduct.vue'
import EditProduct from './components/EditProduct.vue'

Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    // You could also have named views at tho top
    component: Home
  },
  {
    path: '/products',
    component: Products,
    children: [{
      path: '',
      component: ProductList
    },
    {
      path: 'create',
      component: CreateProduct
    },
    {
      path: 'edit',
      component: EditProduct
    }]
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
