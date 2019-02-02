<template>
  <div class="text-center">
    <legend>商品登録</legend>
    <form class="form-horizontal">
      <fieldset>
        <div class="create-product">
          <div :class="errorClassObj('name')" class="form-group">
            <label for="name" class="col-md-2 control-label text-left">商品名</label>
            <input v-model="current.name" id="name"/>
          </div>
          <div :class="errorClassObj('modelNumber')" class="form-group">
            <label for="modelNumber" class="col-md-2 control-label text-left">型番</label>
            <input v-model="current.modelNumber" id="modelNumber"/>
          </div>
          <div :class="errorClassObj('price')" class="form-group">
            <label for="price" class="col-md-2 control-label text-left">販売価格</label>
            <input v-model="current.price" id="price"/>
          </div>
          <div :class="errorClassObj('stock')" class="form-group">
            <label for="stock" class="col-md-2 control-label text-left">在庫数</label>
            <input v-model="current.stock" id="stock"/>
          </div>
          <div :class="errorClassObj('discontinued')" class="form-group">
            <label for="discontinued" class="col-md-2 control-label text-left">販売状態</label>
            <input v-model="current.discontinued" id="discontinued"/>
          </div>
          <div :class="errorClassObj('description')" class="form-group">
            <label for="description" class="col-md-2 control-label text-left">商品説明</label>
            <input v-model="current.description" id="description"/>
          </div>
          <div :class="errorClassObj('description')" class="form-group">
            <label for="description" class="col-md-2 control-label text-left">商品説明</label>
            <input v-model="current.description" id="description"/>
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
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        current: {
          name: '',
          modelNumber: '',
          price: 0,
          stock: 0,
          discontinued: 0,
          description: ''
        }
      }
    },
    computed: {
      ...mapState('product', ['product', 'maxLength']),
      validation() {
        const product = this.current
        
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
    methods: {
      ...mapMutations('product', ['initProduct']),
      ...mapActions('product', ['createProduct']),
      ...mapActions('products', ['addProduct']),
      onSubmit() {
        this.createProduct(this.current)
        this.addProduct()
        return false;
      },
      errorClassObj(key) {
        return {
          'has-error': (this.validation[key] == false)
        }
      }
    }
  }
</script>
