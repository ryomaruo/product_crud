<template>
  <div class="text-center">
    <legend>商品登録</legend>
    <form class="form-horizontal">
      <fieldset>
        <ProductForm page="create"></ProductForm>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductForm from './ProductForm.vue'

  export default {
    components: {
      ProductForm
    }
  }
</script>
