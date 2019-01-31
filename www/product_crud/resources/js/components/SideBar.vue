<template>
  <div id="sidebar">
    <div class="btns-container">
      <div>
        <button class="btn btn-outline-light">
            新規登録
        </button>
    </div>
      <div>
        <button class="btn btn-outline-info">
            編集
        </button>
    </div>
      <div>
        <button class="btn btn-outline-danger">
            削除
        </button>
    </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {

}
</script>

<style lang="scss" scoped>
  #sidebar {
    height: 100%;
    padding: 100px 0;
    position: fixed;
    div {
      margin: 50px 0;
      .btn {
        font-size: 0.8rem;
      }
    }
  }
</style>