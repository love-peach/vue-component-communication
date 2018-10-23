<template>
  <div class="player" @click="handlePunchOut">
    大家好，我是PlayerB：我出的是 {{ myRPS.label }}
  </div>
</template>

<script>
import { getRPS } from '../../utils/common';

export default {
  computed: {
    myRPS() {
      return this.$store.getters.getResultByPlayer('playerB');
    },
  },
  mounted() {
    this.handlePunchOut();
  },
  methods: {
    handlePunchOut() {
      const currentRPS = getRPS();
      this.$store.dispatch('savePlayerB', currentRPS);
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
