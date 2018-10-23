<template>
  <div class="side-right">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style>
.side-right {
  position: relative;
  z-index: 100;
  float: left;
  width: 300px;
  margin-left: -300px;
  height: 500px;
  background-color: #ccc;
  padding: 50px 5px 10px;
  box-sizing: border-box;
}
</style>

