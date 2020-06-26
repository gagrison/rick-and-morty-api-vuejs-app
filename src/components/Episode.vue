<template>
  <section class="episode">
    <p class="name"
       :title="episode.name | capitalize">
      {{episode.name | capitalize}}
    </p>
    <p class="number">{{episode.episode | capitalize}}</p>
    <p>
      <span class="title">Air date: </span>
      <span>{{episode.air_date | capitalize}}</span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Episode',
  props: ['episode']
};
</script>

<style lang="scss">
.app main article section.episode {
  .number {
    font-size: 16px
  }

  p:last-child {
    margin-top: 15px;
  }

  @media only screen and (min-width: 900px) {
    width: 350px;
    flex: 1 0 auto;

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
