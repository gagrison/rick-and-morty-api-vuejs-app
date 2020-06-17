<template>
  <div class="error">
    {{error}}
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
};
</script>

<style lang="scss">
.error {
  color: #f00;
}
</style>
