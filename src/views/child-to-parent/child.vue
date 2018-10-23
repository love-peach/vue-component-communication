<template>
  <div class="child">
    我是子组件
    <button @click="handleShowMyAge">我是小明，我要告诉你我几岁了</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleShowMyAge() {
      this.$emit('showMyage', 18);
    },
  },
};
</script>


<style scoped>
.child {
  padding: 10px;
  border: 1px solid blue;
}
</style>

