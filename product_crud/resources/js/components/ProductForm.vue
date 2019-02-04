<template>
  <div class="create-product">
    <div :class="errorClassObj('name')">
      <label class="block-label">
        <p class="label-txt">商品名</p>
        <input type="text" v-model="current.name" class="input">
        <div class="line-box">
          <div class="line"></div>
        </div>
        <div v-if="isInvalid('name', 'require')" class="error-area">
          名前を入力してください。
        </div>
        <div v-if="isInvalid('name', 'length')" class="error-area">
          名前は32文字以内で入力してください。
        </div>
      </label>
    </div>

    <div :class="errorClassObj('model_number')">
      <label class="block-label">
        <p class="label-txt">型番</p>
        <input type="text" v-model="current.model_number" class="input">
        <div class="line-box">
          <div class="line"></div>
        </div>
        <div v-if="isInvalid('model_number', 'require')" class="error-area">
            型番を入力してください。
        </div>
        <div v-if="isInvalid('model_number', 'length')" class="error-area">
            型番は50文字以内で入力してください。
        </div>
      </label>
    </div>

    <div :class="errorClassObj('price')">
      <label class="block-label clearfix">
        <p class="label-txt">販売価格</p>
        <input type="text" v-model="current.price" class="input">
        <span class="float-right">円</span>
        <div class="line-box">
          <div class="line"></div>
        </div>
        <div v-if="isInvalid('price', 'require')" class="error-area">
            販売価格を入力してください。
        </div>
        <div v-if="isInvalid('price', 'isNum')" class="error-area">
            販売価格は半角数字で入力してください。
        </div>
      </label>
    </div>

    <div :class="errorClassObj('stock')">
      <label class="block-label clearfix">
        <p class="label-txt">在庫</p>
        <input type="text" v-model="current.stock" class="input">
        <span class="float-right">個</span>
        <div class="line-box">
          <div class="line"></div>
        </div>
        <div v-if="isInvalid('stock', 'require')" class="error-area">
            在庫入力してください。
        </div>
        <div v-if="isInvalid('stock', 'isNum')" class="error-area">
            在庫は半角数字で入力してください。
        </div>
      </label>
    </div>

    <div>
      <label class="block-label">
        <p class="label-txt">商品説明</p>
        <input type="text" v-model="current.description" class="input">
        <div class="line-box">
          <div class="line"></div>
        </div>
      </label>
    </div>

    <div>
      <label class="block-label">
        <p class="label-txt">販売状態</p>
        <input type="radio" id="onsale" value="0" v-model="current.discontinued">
        <label for="one">販売中</label>
        <input type="radio" id="discontinued" value="1" v-model="current.discontinued">
        <label for="two">販売停止</label>
      </label>
    </div>

    <div class="text-center">
      <input
        :value="submitTitle"
        class="btn btn-sm btn-outline-info"
        :disabled="isValid == false || isSubmitting == true"
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
    ...mapState('product', ['product', 'maxLength', 'isSubmitting']),
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
        model_number: (!!current.model_number && current.model_number.length <= this.maxLength.model_number),
        price   : (!!current.price && !isNaN(current.price) || current.price === 0),
        stock: (!!current.stock && !isNaN(current.stock) || current.stock === 0),
        discontinued: (current.discontinued !== '' && current.discontinued == 0 || current.discontinued == 1)
      }
    },
    validationDetail() {
      const current = this.current
      return {
        name: {
          require: !!current.name,
          length: current.name.length <= this.maxLength.name
        },
        model_number: {
          require: !!current.model_number,
          length: current.model_number.length <= this.maxLength.name
        },
        price: {
          require: !!current.price,
          isNum: !isNaN(current.price) || current.price === 0
        },
        stock: {
          require: !!current.stock,
          isNum: !isNaN(current.stock) || current.stock === 0
        },
        discontinued: {
          require: current.discontinued !== '',
          isValid: current.discontinued == 0 || current.discontinued == 1
        }
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
    ...mapMutations('product', ['toggleSubmitting']),
    ...mapActions('product', ['createProduct', 'updateProduct']),
    ...mapActions('products', ['addProduct']),
    async onSubmit() {
      this.toggleSubmitting({
        bool: true
      })
      switch (this.page) {
        case 'create':
          const res = await this.createProduct(this.current)

          await this.addProduct()
          this.current = Object.assign({}, this.newProduct)
          this.$router.push({
            path: '/products'
          })
          break;
        case 'edit':
          this.updateProduct(this.current)
          break;
      }
      this.toggleSubmitting({
        bool: false
      })
      return false;
    },
    isInvalid(key, detail) {
      return this.validationDetail[key][detail] == false
    },
    async init () {
      switch (this.page) {
        case 'create':
          this.current = Object.assign({}, this.newProduct)
          break;
        case 'edit':
          this.current = await this.editingProduct(this.$route.params.id)
          break;
      }
    },
    errorClassObj(key) {
      return {
        'has-error': (this.validation[key] == false)
      }
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.block-label {
  width: 50%;
  display: block;
  position: relative;
  margin: 30px auto;
  label {
    margin: 0 10px;
  }
}
label {
  font-size: 1em;
}
.input {
  width: 100%;
  padding: 0 10px 0 70px;
  font-size: 1.2em;
  color: #d0d0d0;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
  .line {
    position: absolute;
    width: 0%;
    height: 2px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #8BC34A;
    transition: ease .6s;
  }
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-txt {
  position: absolute;
  top: 0;
  padding: 2px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: #b1b1b1;
  transition: ease .3s;
}

.has-error {
  .error-area {
    font-size: .8em;
  }
  .error-area,
  .label-txt {
    color: #d16376;
  }
  .line-box {
    background: #d16376;
  }
}
</style>