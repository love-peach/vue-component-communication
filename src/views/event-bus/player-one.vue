<template>
  <div class="player" @click="handlePunchOut">
    大家好，我是PlayerA：我出的是 {{ myRPS.label }}
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus';
import { getRPS } from '../../utils/common';

export default {
  data() {
    return {
      myRPS: {},
    };
  },
  mounted() {
    this.handlePunchOut();
  },
  methods: {
    handlePunchOut() {
      const currentRPS = getRPS();
      this.myRPS = currentRPS;
      eventBus.$emit('RPS_a', currentRPS);
    },
  },
};
</script>

<style scoped>
.player {
  padding: 10px;
  border: 1px solid blue;
  margin-bottom: 10px;
}
</style>
