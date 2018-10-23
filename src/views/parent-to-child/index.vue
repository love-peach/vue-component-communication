<template>
  <div class="parent">
    我是父组件
    <child :name="name"></child>
  </div>
</template>

<script>
import Child from './child.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      name: '小明',
    };
  },
};
</script>

<style scoped>
.parent {
  padding: 10px;
  border: 1px solid red;
}
</style>
