<template>
  <div>
    <div v-if="isExistProducts" class="row">
      <div
        v-for="product, i in products"
        :key="product.id"
        class="col-lg-6 col-md-12 col-sm-12">
        <div class="product-box mx-auto">
          <div class="btn-area">
            <b-btn
              v-b-modal.basicModal
              variant="outline-danger"
              @click="onClickDelete(i)">
              <font-awesome-icon icon="times" />
            </b-btn>
<!--            <button
              class="btn btn-outline-danger"
              @click="basicModalShow">
            </button> -->
          </div>
          <div class="image-area">
            <img :src="product.image_url" @error="imageUrlAlt(i)" />
          </div>
          <div class="info-area">
          {{ product.name }} {{ product.price }}Yen
          </div>
        </div>
      </div>
      <basic-modal></basic-modal>
    </div>
    <div v-else class="col-12 text-center no-item">
      No Items
    </div>
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import BasicModal from './BasicModal.vue'

export default {
  components: {
    BasicModal
  },
  computed: {
    ...mapState("products", ["products"]),
    ...mapGetters("products", ['isExistProducts'])
  },
  methods: {
    ...mapActions('products', [
      'initProducts',
      'imageUrlAlt'
    ]),
    ...mapActions('modal', ['onClickDelete']),
  },
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
    .btn-area {
      padding: 5px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      .btn {
        border-radius: 20px !important;
      }
    }
    .info-area {
      padding: 5px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .no-item {
    padding-top: 20px;
  }
</style>