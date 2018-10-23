<template>
  <div class="app-layout">
    <h1 class="app-header">Vue 组件通信 demo</h1>
    <div class="app-container">
      <div class="app-side-nav-wrap">
        <app-side-nav></app-side-nav>
      </div>
      <div class="app-side-main">
        <div class="app-content-outside">
          <div class="app-content">
            <div class="app-crumbs">crumbs</div>
            <div class="app-content-inside">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSideNav from './AppSideNav.vue';

export default {
  components: {
    AppSideNav,
  },
};
</script>

<style lang="less" scoped>

@heightHeaderTop: 50px;
@widthSideNav: 200px;
.app-layout {
}
.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  font-size: 20px;
  color: #fff;
  height: @heightHeaderTop;
  line-height: @heightHeaderTop;
  background-color: #3ab980;
}
.app-container {
  margin-top: @heightHeaderTop;
}
.app-side-nav-wrap {
  position: fixed;
  top: @heightHeaderTop;
  bottom: 0;
  left: 0;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  width: @widthSideNav;
  background-color: #34495f;
}
.app-side-main {
  margin-left: @widthSideNav;
}
.app-content-outside {
  min-height: calc(100vh - @heightHeaderTop);
  background-color: #f6f6f6;
  overflow: auto;
}
.app-crumbs {
  padding: 15px;
  background-color: #eaeaea;
  border-bottom: 1px solid #e8e8e8;
}
.app-content {
  min-width: 1000px;
}
.app-content-inside {
  padding: 15px;
}
</style>
