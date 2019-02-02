<template>
  <div>
    <div class="create-product">
      {{ product }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState('product', ['product', 'maxLength'])
    },
    methods: {
      ...mapActions('product', ['initEditingProduct'])
    },
    created() {
      this.initEditingProduct(this.$route.params.id)
    }
  }
</script>