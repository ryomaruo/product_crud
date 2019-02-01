<template>
  <b-modal
    id="basicModal"
    header-text-variant="dark"
    body-text-variant="dark"
    @ok="onClickOk">
    <p class="my-4">{{ bodySentence }}</p>
  </b-modal>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'BasicModal',
    computed: {
      ...mapState('modal', [
        'selectedIndex',
        'modalName'
      ]),
      ...mapState('products', ['products']),
      bodySentence() {
        switch(this.modalName) {
          case 'deleteModal':
            if (this.selectedIndex === '') {
              return '';
            }
            const index = this.selectedIndex
            const products = this.products
            return '商品名「' + products[index].name + '」を削除します。よろしいですか？'
            break
        }
      }
    },
    methods: {
      ...mapActions('products', ['deleteProduct']),
      ...mapMutations('modal', ['resetSelectedIndex']),
      onClickOk() {
        switch(this.modalName) {
          case 'deleteModal':
            this.deleteProduct(this.selectedIndex)
            this.resetSelectedIndex()
            break
        }
      }
    }
  }
</script>
