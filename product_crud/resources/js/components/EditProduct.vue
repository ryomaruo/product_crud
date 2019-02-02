<template>
  <div class="text-center">
    <legend>商品編集</legend>
    <form class="form-horizontal">
      <fieldset>
        <ProductForm page="edit"></ProductForm>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ProductForm from './ProductForm.vue'

  export default {
    components: {
      ProductForm
    }
  }
</script>