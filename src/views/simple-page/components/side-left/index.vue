<template>
  <div class="side-left">
    <div class="side-left-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.side-left {
  width: 100%;
  position: relative;
  float: left;
}
.side-left-content {
  box-sizing: border-box;
  margin-right: 315px;
  background-color: #ccc;
  height: 500px;
  padding: 180px 10px 10px;
}
</style>

