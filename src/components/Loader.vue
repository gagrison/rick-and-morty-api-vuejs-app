<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style lang="scss">
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid;
  border-top-color: $rickandmorty-yellow;
  border-right-color: $rickandmorty-dark-pink;
  border-bottom-color: $rickandmorty-brown;
  border-left-color: $rickandmorty-pink;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
