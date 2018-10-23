<template>
  <div class="storage-wrap">
    <div class="storage-local">
      <label for="local">local</label>
      <input id="local" type="text" v-model="value1">
      <button @click="handleSetLocal">设置localStorage</button>
      <button @click="handleGetLocal">获取结果</button>
      <span>{{ localValue }}</span>
    </div>

    <div class="storage-session">
      <label for="session">session</label>
      <input id="session" type="text" v-model="value2">
      <button @click="handleSetSession">设置sessionStorage</button>
      <button @click="handleGetSession">获取结果</button>
      <span>{{ sessionValue }}</span>
    </div>
  </div>
</template>

<script>
import store from '@/utils/store';

export default {
  name: 'storage',
  data() {
    return {
      value1: '',
      value2: '',
      localValue: store.getSomeData(),
      sessionValue: store.getUserInfo(),
    };
  },
  methods: {
    handleSetLocal() {
      store.setSomeData(this.value1);
    },
    handleGetLocal() {
      this.localValue = store.getSomeData();
    },
    handleSetSession() {
      store.setUserInfo(this.value2);
    },
    handleGetSession() {
      this.sessionValue = store.getUserInfo();
    },
  },
};
</script>

<style>
.storage-wrap {

}
</style>

