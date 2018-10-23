<template>
  <div class="parent">
    我是父组件
    <child @showMyage="tellMeAge"></child>
  </div>
</template>

<script>
import Child from './child.vue';

export default {
  components: {
    Child,
  },
  methods: {
    tellMeAge(data) {
      // eslint-disable-next-line
      alert(`我知道了，你${data}岁了`);
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 10px;
  border: 1px solid red;
}
</style>

