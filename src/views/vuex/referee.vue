<template>
  <div class="referee">
    大家好，我是裁判。<br>
    <span>{{ RPS_a ? `A出的是：${RPS_a.label}` : 'A还没出'}}</span><br>
    <span>{{ RPS_b ? `B出的是：${RPS_b.label}` : 'B还没出'}}</span><br>
    <span v-if="result">结果是：{{ result }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    RPS_a() {
      return this.$store.getters.getResultByPlayer('playerA');
    },
    RPS_b() {
      return this.$store.getters.getResultByPlayer('playerB');
    },
    result() {
      const playerA = this.RPS_a;
      const playerB = this.RPS_b;
      let result = '';
      if (!playerA || !playerB) {
        return result;
      }
      const diff = playerA.value - playerB.value;
      if (diff === 0) {
        result = '平局';
      } else if (diff === -1 || diff === 2) {
        result = 'PlayerA 赢了';
      } else {
        result = 'PlayerB 赢了';
      }
      return result;
    },
  },
};
</script>

<style scoped>
.referee {
  padding: 10px;
  border: 1px solid red;
}
</style>

