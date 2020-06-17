<template>
  <article class="location">
    <p class="name">{{location.name}}</p>
    <p>
      <span>Type: </span>
      <span>
        {{location.type | capitalize}}
      </span>
    </p>
    <p>
      <span>Dimension: </span>
      <span>{{location.dimension | capitalize}}</span>
    </p>
  </article>
</template>

<script>
export default {
  name: 'Location',
  props: ['location']
};
</script>

<style lang="scss">
.location {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: $rickandmorty-dark-pink;

  p {
    margin-bottom: 7px;

    &.name {
      font-size: 24px;
      margin-bottom: 15px;
    }

    span:first-child {
      color: $rickandmorty-yellow;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 900px) {
    width: 350px;
    height: 140px;
    justify-content: space-evenly;

    p {
      margin: 0;

      &.name {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
