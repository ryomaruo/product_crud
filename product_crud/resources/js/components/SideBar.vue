<template>
  <div id="sidebar">
    <div class="btns-container">
      <div>
        <router-link
          :to="createBtnPath"
          tag="button"
          class="btn btn-outline-light"
          :disabled="isCreateBtnDisabled">
          {{ createBtnTitle }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      isCreateBtnDisabled() {
        return false;
      },
      createBtnPath() {
        return (this.isBtnToList())? '/products':'/products/create'
      },
      createBtnTitle() {
        return (this.isBtnToList())? '一覧に戻る':'新規登録'
      }
    },
    methods: {
      isBtnToList() {
        return (this.$route.path == '/products/create' || this.$route.matched.some(record => record.path == '/products/edit/:id'))
      }
    }
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    height: 100%;
    padding: 40px 0;
    position: fixed;
    div {
      margin: 50px 0;
    }
  }
</style>