<template>
  <div class="simple-page">
    <header-top></header-top>

    <side-left>
      <child-row></child-row>
      <child-row></child-row>
    </side-left>

    <side-right>
      <child-column></child-column>
      <child-column></child-column>
      <child-column></child-column>
    </side-right>

  </div>
</template>

<script>
import HeaderTop from './components/header-top/index.vue';
import SideLeft from './components/side-left/index.vue';
import SideRight from './components/side-right/index.vue';
import ChildRow from './components/child-row/index.vue';
import ChildColumn from './components/child-column/index.vue';

export default {
  components: {
    HeaderTop,
    SideLeft,
    SideRight,
    ChildRow,
    ChildColumn,
  },
};
</script>

<style>
.simple-page {
  overflow: hidden;
}
</style>

