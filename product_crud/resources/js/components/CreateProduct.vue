<template>
  <div class="text-center">
    <legend>商品登録</legend>
    <form class="form-horizontal">
      <fieldset>
        <div class="create-product">
          <div :class="errorClassObj('name')" class="form-group">
            <label for="name" class="col-md-2 control-label text-left">商品名</label>
            <input v-model="product.name" id="name"/>
          </div>
          <div :class="errorClassObj('modelNumber')" class="form-group">
            <label for="modelNumber" class="col-md-2 control-label text-left">型番</label>
            <input v-model="product.modelNumber" id="modelNumber"/>
          </div>
          <div :class="errorClassObj('price')" class="form-group">
            <label for="price" class="col-md-2 control-label text-left">販売価格</label>
            <input v-model="product.price" id="price"/>
          </div>
          <div :class="errorClassObj('stock')" class="form-group">
            <label for="stock" class="col-md-2 control-label text-left">在庫数</label>
            <input v-model="product.stock" id="stock"/>
          </div>
          <div :class="errorClassObj('discontinued')" class="form-group">
            <label for="discontinued" class="col-md-2 control-label text-left">販売状態</label>
            <input v-model="product.discontinued" id="discontinued"/>
          </div>
          <div :class="errorClassObj('description')" class="form-group">
            <label for="description" class="col-md-2 control-label text-left">商品説明</label>
            <input v-model="product.description" id="description"/>
          </div>
          <div class="text-center">
            <input
              value="追加"
              class="btn btn-sm btn-primary"
              :disabled="isValid == false"
              @click="onSubmit" />
            </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        product: {}
      }
    },
    methods: {
      ...mapActions('products', ['createProduct']),
      initProduct() {
        this.product = {
          name: '',
          modelNumber: '',
          price: 0,
          stock: 0,
          discontinued: 0,
          description: ''
        }
      },
      onSubmit() {
        this.createProduct(this.product)
        this.initProduct()
        return false;
      },
      errorClassObj(key) {
        return {
          'has-error': (this.validation[key] == false)
        }
      }
    },
    computed: {
      ...mapState('products', ['maxLength']),
      validation() {
        const product = this.product
        
        return {
          name  : (!!product.name && product.name.length <= this.maxLength.name),
          modelNumber: (!!product.modelNumber && product.name.length <= this.maxLength.name),
          price   : (!!product.price && isNaN(product.price) || product.price == 0),
          stock: (!!product.stock && isNaN(product.stock) || product.stock == 0),
          discontinued: (product.discontinued == 0 || product.discontinued == 1)
        }
      },
      isValid() {
        const validation = this.validation
        return Object
          .keys(validation)
          .every(function (key) {
            return validation[key]
        })
      }
    },
    created() {
      this.initProduct()
    }
  }
</script>
