<template>
  <div id="app"
       class="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100%;

  // Elements used inside /views components
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    padding: 20px;
    background-color: $rickandmorty-green;
    color: $rickandmorty-brown;

    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
}
</style>
