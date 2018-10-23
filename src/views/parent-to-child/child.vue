<template>
  <div class="child">
    我是子组件 <br>
    爸爸给我取的名子：{{ name }}
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: '',
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
