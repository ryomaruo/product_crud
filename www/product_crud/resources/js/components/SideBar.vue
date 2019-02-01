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
      <div>
        <router-link
          to="editBtnPath"
          tag="button"
          class="btn btn-outline-info disabled"
          :disabled="isEditBtnDisabled">
            {{ editBtnTitle }}
        </router-link>
    </div>
      <div>
        <button
          @click="showDelModal"
          class="btn btn-outline-danger"
          :class="{ disabled: isDelBtnDisabled }">
            削除
        </button>
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
      isEditBtnDisabled() {
        return true;
      },
      isDelBtnDisabled() {
        return true;
      },
      createBtnPath() {
        return (this.$route.path == '/products/create')? '/products':'/products/create'
      },
      editBtnPath() {
        return (this.$route.path == '/products/edit')? '/products':'/products/edit'
      },
      createBtnTitle() {
        return (this.$route.path == '/products/create')? '一覧に戻る':'新規登録'
      },
      editBtnTitle() {
        return (this.$route.path == '/products/edit')? '一覧に戻る':'編集'
      }
    },
    methods: {
      ...mapActions('modals', [
        'showDelModal'
      ])
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