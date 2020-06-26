<template>
  <section class="location">
    <p class="name"
       :title="location.name | capitalize">
      {{location.name | capitalize}}
    </p>
    <p>
      <span class="title">Type: </span>
      <span :title="location.type | capitalize">
        {{location.type | capitalize}}
      </span>
    </p>
    <p>
      <span class="title">Dimension: </span>
      <span :title="location.dimension | capitalize">
        {{location.dimension | capitalize}}
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Location',
  props: ['location']
};
</script>

<style lang="scss">
.app main article section.location {
  p {
    margin-top: 6px;

    &.name {
      margin: 0 0 9px;
    }
  }

  @media only screen and (min-width: 900px) {
    width: 350px;
    flex: 1 0 auto;
    justify-content: space-between;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
