<template>
  <article class="episode">
    <p class="name">{{episode.name}}</p>
    <p>{{episode.episode}}</p>
    <p>
      <span>Air date: </span>
      <span>{{episode.air_date}}</span>
    </p>
  </article>
</template>

<script>
export default {
  name: 'Episode',
  props: ['episode']
};
</script>

<style lang="scss">
.episode {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: $rickandmorty-dark-pink;

  p {
    &.name {
      font-size: 24px;
    }

    &:last-child {
      margin-top: 15px;
    }

    span:first-child {
      color: $rickandmorty-yellow;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 900px) {
    width: 450px;
    height: 96px;
    justify-content: space-evenly;
  }
}
</style>
