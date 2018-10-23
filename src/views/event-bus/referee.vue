<template>
  <div class="referee">
    大家好，我是裁判。<br>
    <span>{{ RPS_a ? `A出的是：${RPS_a.label}` : 'A还没出'}}</span><br>
    <span>{{ RPS_b ? `B出的是：${RPS_b.label}` : 'B还没出'}}</span><br>
    <span v-if="result">结果是：{{ result }}</span>
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus';

export default {
  data() {
    return {
      RPS_a: null,
      RPS_b: null,
    };
  },
  computed: {
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
  created() {
    const that = this;
    eventBus.$on('RPS_a', (data) => {
      that.RPS_a = data;
    });
    eventBus.$on('RPS_b', (data) => {
      that.RPS_b = data;
    });
  },
};
</script>

<style scoped>
.referee {
  padding: 10px;
  border: 1px solid red;
}
</style>

