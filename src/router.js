import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from './components/AppLayout.vue';

const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const simplePage = () => import(/* webpackChunkName: "simplePage" */ './views/simple-page/index.vue');
const parentToChild = () => import(/* webpackChunkName: "parentToChild" */ './views/parent-to-child/index.vue');
const childToParent = () => import(/* webpackChunkName: "childToParent" */ './views/child-to-parent/index.vue');
const eventBus = () => import(/* webpackChunkName: "eventBus" */ './views/event-bus/index.vue');
const vuex = () => import(/* webpackChunkName: "vuex" */ './views/vuex/index.vue');
const routerQuery = () => import(/* webpackChunkName: "routerQuery" */ './views/router-query/index.vue');
const routerParas = () => import(/* webpackChunkName: "routerParas" */ './views/router-params/index.vue');
const routerParamsHidden = () => import(/* webpackChunkName: "routerParamsHidden" */ './views/router-params-hidden/index.vue');
const storage = () => import(/* webpackChunkName: "storage" */ './views/storage/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/simple-page',
          name: 'simplePage',
          component: simplePage,
        },
        {
          path: '/parent-to-child',
          name: 'parentToChild',
          component: parentToChild,
        },
        {
          path: '/child-to-parent',
          name: 'childToParent',
          component: childToParent,
        },
        {
          path: '/event-bus',
          name: 'eventBus',
          component: eventBus,
        },
        {
          path: '/vuex',
          name: 'vuex',
          component: vuex,
        },
        {
          path: '/router-query',
          name: 'routerQuery',
          component: routerQuery,
        },
        {
          path: '/router-params/:id',
          name: 'routerParas',
          component: routerParas,
        },
        {
          path: '/router-params-hidden',
          name: 'routerParamsHidden',
          component: routerParamsHidden,
        },
        {
          path: '/storage',
          name: 'storage',
          component: storage,
        },
      ],
    },
  ],
});
