<template>
  <div>
    <div v-if="isExistProducts" class="row">
      <div
        v-for="product, i in products"
        :key="product.id"
        class="col-lg-6 col-md-12 col-sm-12">
        <div class="product-box mx-auto">
          <router-link
            tag="div"
            class="image-area"
            :to="{ path: '/products/edit/' + product.id }">
            <div class="btn-area">
              <b-btn
                v-b-modal.basicModal
                variant="outline-danger"
                @click.stop="onClickDelete(i)">
                <font-awesome-icon icon="times" />
              </b-btn>
            </div>
            <img
              :src="product.image_url"
              @error="imageUrlAlt(i)" />
            <div class="info-area">
              <p>{{ product.name }} : {{ product.price }}円</p>
            </div>
          </router-link>
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
    height: 250px;
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
    .image-area {
      &:hover {
        cursor: pointer;
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
    }
    .info-area {
      padding: 5px;
      background: #000;
      opacity: 0.6;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .no-item {
    padding-top: 20px;
  }
</style>