<template>
  <div class="create-product">
    <div :class="errorClassObj('name')" class="form-group">
      <label for="name" class="col-md-2 control-label text-left">商品名</label>
      <input v-model="current.name" id="name"/>
    </div>
    <div :class="errorClassObj('model_number')" class="form-group">
      <label for="model_number" class="col-md-2 control-label text-left">型番</label>
      <input v-model="current.model_number" id="model_number"/>
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
      <input type="radio" id="onsale" value="0" v-model="current.discontinued">
      <label for="one">販売中</label>
      <input type="radio" id="discontinued" value="1" v-model="current.discontinued">
      <label for="two">販売停止</label>
    </div>
    <div :class="errorClassObj('description')" class="form-group">
      <label for="description" class="col-md-2 control-label text-left">商品説明</label>
      <input v-model="current.description" id="description"/>
    </div>
    <div class="text-center">
      <input
        :value="submitTitle"
        class="btn btn-sm btn-primary"
        :disabled="isValid == false"
        @click="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: ['page'],
  data() {
    return {
      current: {}
    }
  },
  computed: {
    ...mapState('product', ['product', 'maxLength']),
    ...mapGetters('product', [
      'newProduct',
      'editingProduct'
    ]),
    submitTitle() {
      switch (this.page) {
        case 'create':
          return '登録'
          break
        case 'edit':
          return '更新'
          break
      }
    },
    validation() {
      const current = this.current
      return {
        name  : (!!current.name && current.name.length <= this.maxLength.name),
        model_number: (!!current.model_number && current.name.length <= this.maxLength.name),
        price   : (!!current.price && !isNaN(current.price) || current.price === 0),
        stock: (!!current.stock && !isNaN(current.stock) || current.stock === 0),
        discontinued: (current.discontinued !== '' && current.discontinued == 0 || current.discontinued == 1)
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
    ...mapMutations('product', ['setProduct']),
    ...mapActions('product', ['createProduct', 'updateProduct']),
    ...mapActions('products', ['addProduct']),
    onSubmit() {
      switch (this.page) {
        case 'create':
          this.createProduct(this.current)
          this.addProduct()
          break;
        case 'edit':
          this.updateProduct(this.current)
          break;
      }
      
      return false;
    },
    errorClassObj(key) {
      return {
        'has-error': (this.validation[key] == false)
      }
    },
    async init () {
      switch (this.page) {
        case 'create':
          this.current = this.newProduct
          break;
        case 'edit':
          this.current = await this.editingProduct(this.$route.params.id)
          break;
      }
    }
  },
  created() {
    this.init()
  }
}
</script>