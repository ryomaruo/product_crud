<template>
  <div class="row">
    <div
      v-for="product, i in products"
      :key="product.id"
      class="col-lg-6 col-md-12 col-sm-12">
      <div class="product-box mx-auto">
        <div class="image-area">
          <img :src="product.image_url" @error="imageUrlAlt(i)" />
        </div>
        <div class="info-area">
        {{ i }}
        {{ product.name }} {{ product.price }}Yen
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState("products", ["products"])
  },
  methods: mapActions('products', [
    'initProducts',
    'imageUrlAlt'
  ]),
  created () {
    this.initProducts()
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
  .product-box {
    width: 350px;
    height: 200px;
    margin: 40px 0;
    border: solid 1px #fff;
    box-shadow: 0 0 10px #fff;
    position: relative;
    .image-area {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .info-area {
      padding: 5px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>