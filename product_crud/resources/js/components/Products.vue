<template>
  <div class="main" :style="{ height: wrapperHeight }">
    <div class="container" :style="{ height: wrapperHeight }">
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
import { mapGetters } from 'vuex'
import SideBar from './SideBar.vue'

export default {
  components: {
    SideBar
  },
  computed: {
    ...mapGetters(['wrapperHeight'])
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
  }
  .main-container {
    height: 100%;
    padding: 50px 0;
  }
  .row {
    height: 100%;
    width: 100%;
  }
</style>