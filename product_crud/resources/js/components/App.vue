<template>
  <div class="wrapper" :style="{ height: wrapperHeight }">
    <RouterView />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('products', ['products']),
    ...mapGetters(['wrapperHeight'])
  },
  methods: {
    ...mapActions('products', [
      'initProducts'
    ])
  },
  created () {
    this.initProducts()
  }
}
</script>

