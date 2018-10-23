<template>
  <div class="app-side-nav">
    <ul class="menu-list">
      <li v-for="menu in menus" class="menu-list-item" :key="menu.path">
        <router-link
          v-if="menu.params"
          exact
          active-class="active"
          class="item-link"
          :to="{name: menu.routerName, params: menu.params}"
        >
          {{ menu.name }}
        </router-link>
        <router-link
          v-else
          exact
          active-class="active"
          class="item-link"
          :to="{path:  menu.path, query: menu.query}"
        >
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          path: '/',
          name: '首页',
        },
        {
          path: '/simple-page',
          name: '简单布局',
        },
        {
          path: '/parent-to-child',
          name: '父子通信',
        },
        {
          path: '/child-to-parent',
          name: '子父通信',
        },
        {
          path: '/event-bus',
          name: 'eventBus',
        },
        {
          path: '/vuex',
          name: 'vuex',
        },
        {
          path: '/router-query',
          name: '路由传参-query',
          query: {
            userId: 123,
          },
        },
        {
          path: '/router-params/123',
          name: '路由传参-params',
        },
        {
          routerName: 'routerParamsHidden',
          name: '路由传参-params2',
          params: {
            userId: 123,
          },
        },
        {
          path: '/storage',
          name: '本地存储',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.app-side-nav {
  .menu-list {
    margin: 20px 0 0 0;
    padding: 0 0 0 20px;
    list-style: none;
  }
  .menu-list-item {

  }
  .item-link {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
  }
  .active {
    color: #3ab980;
  }
}
</style>

