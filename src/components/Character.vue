<template>
  <article class="character">
    <img :src="char.image"
         :alt="char.name">
    <div class="content">
      <div class="row nameRow">
        <p class="name">{{char.name}}</p>
        <p>
          <span :class="[statusClass, 'status']"></span>
          <span>{{char.status | capitalize}} - </span>
          <span v-if="char.species !== 'unknown'">{{char.species}} </span>
          <span v-if="char.gender !== 'unknown'">{{char.gender}}</span>
        </p>
      </div>
      <div class="row">
        <p>Origin:</p>
        <p class="text">{{char.origin.name | capitalize}}</p>
      </div>
      <div class="row">
        <p>Last known location:</p>
        <p class="text">{{char.location.name | capitalize}}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Character',
  data () {
    return {
      statusClass: {
        alive: this.char.status.toLowerCase() === 'alive',
        dead: this.char.status.toLowerCase() === 'dead'
      }
    };
  },
  props: ['char']
};
</script>

<style lang="scss">
.character {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: $rickandmorty-dark-pink;

  img {
    width: 100%;
  }

  .content {
    padding: 5px;

    .row {
      margin-top: 17px;

      &.nameRow {
        margin: 0 0 33px 0;
        padding-top: 8px;

        .name {
          font-size: 24px;
        }
      }

      &:not(.nameRow) p:first-child {
        margin-bottom: 5px;
        color: $rickandmorty-yellow;
        font-weight: bold;
      }
    }

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
  }

  @media only screen and (min-width: 900px) {
    width: 500px;
    flex-direction: row;

    img {
      width: 200px;
      height: 200px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 200px;
      overflow: hidden;
      margin-left: 15px;

      .row {
        margin: 0;

        &.nameRow {
          padding: 0;
        }

        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
