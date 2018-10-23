<template>
  <div>
    <h1>Vuex 石头剪刀布</h1>
    <player-one></player-one>
    <player-two></player-two>
    <referee></referee>
  </div>
</template>

<script>
import Referee from './referee.vue';
import PlayerOne from './player-one.vue';
import PlayerTwo from './player-two.vue';

export default {
  components: {
    Referee,
    PlayerOne,
    PlayerTwo,
  },
};
</script>

