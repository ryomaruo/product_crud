<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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

