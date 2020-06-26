<template>
  <span>
    <span :class="[statusClass, 'status']"></span>
    <span>{{status | capitalize}} - </span>
  </span>
</template>

<script>
export default {
  name: 'Status',
  data () {
    return {
      statusClass: {
        alive: this.status.toLowerCase() === 'alive',
        dead: this.status.toLowerCase() === 'dead'
      }
    };
  },
  props: ['status']
};
</script>

<style lang="scss">
.status {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #aaa;

  &.alive {
    background-color: #0f0;
  }

  &.dead {
    background-color: #f00;
  }
}
</style>
