<template>
  <div>
    <div class="create-product">
      {{ $route.params }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState('products', ['editingProduct'])
    },
    methods: {
    },
    created() {
    }
  }
</script>