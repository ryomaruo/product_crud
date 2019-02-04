<template>
  <div v-if="isLoading" class="loading">
    <Loading></Loading>
  </div>
  <div v-else>
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
              <p><span class="info-title">商品名:</span>{{ product.name }}</p>
              <p><span class="info-title">型番:</span>{{ product.model_number }}</p>
              <p><span class="info-title">価格:</span>{{ product.price }}円</p>
              <p><span class="info-title">在庫:</span>{{ product.stock }}個</p>
              <p><span class="info-title">商品説明:</span>{{ product.description }}</p>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import BasicModal from './BasicModal.vue'
import Loading from './Loading.vue'

export default {
  components: {
    BasicModal,
    Loading
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapState('products', ['products']),
    ...mapGetters("products", ['isExistProducts'])
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    ...mapActions('products', [
      'initProducts',
      'imageUrlAlt'
    ]),
    ...mapActions('modal', ['onClickDelete']),
  },
  async created () {
    this.toggleLoading({
      bool: true
    })
    
    await this.initProducts()
    this.toggleLoading({
      bool: false
    })
  }
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
        width: 35px;
        height: 35px;
        padding: 5px;
        position: absolute;
        top: 0;
        right: 10px;
        z-index: 1;
        .btn {
          border-radius: 20px !important;
        }
      }
    }
    .info-area {
      height: 100%;
      width: 100%;
      padding: 5px;
      background: #000;
      opacity: 0.6;
      overflow: scroll;
      position: absolute;
      bottom: 0;
      right: 0;
      p {
        padding-right: 40px;
        margin-bottom: 0;
        word-wrap: break-word;
      }
      .info-title {
        width: 80px;
        display: inline-block;
      }
    }
  }
  .no-item {
    padding-top: 20px;
  }
</style>