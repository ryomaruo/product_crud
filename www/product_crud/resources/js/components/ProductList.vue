<template>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-lg-6 col-md-12 col-sm-12">
      <div
        class="product-box mx-auto"
        :style="{ backgroundImage: `url('${product.image_url}')` }">
        {{ product.name }}
        {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState("products", ["products"]),
    ...mapGetters({
      doneCount: 'doneTodosCount'
    })
  },
  methods: mapActions('products', [
    'initProducts'
  ]),
  created () {
    this.initProducts()
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
  .product-box {
    width: 350px;
    height: 200px;
    margin: 40px 0;
    border: solid 1px #fff;
  }
</style>