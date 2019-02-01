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
        return (this.$route.path == '/products/create')? '/products':'/products/create'
      },
      createBtnTitle() {
        return (this.$route.path == '/products/create')? '一覧に戻る':'新規登録'
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
      .btn {
        font-size: 0.8rem;
        box-shadow: 0 0 10px #fff;
      }
    }
  }
</style>