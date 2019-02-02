<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-10 main-container">
          <RouterView />
        </div>
        <div class="col-2 float-right" id="sidebar-container">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
  .row {
    height: 150%;
    width: 100%;
  }
  .container {
    position: relative;
  }
  .main-container {
    height: 100%;
    padding: 50px 0;
  }
</style>