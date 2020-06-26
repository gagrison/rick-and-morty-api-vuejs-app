<template>
  <section class="character">
    <img :src="char.image" :alt="char.name"/>
    <div class="content">
      <div class="row firstRow">
        <p class="name"
           :title="char.name | capitalize">
          {{char.name | capitalize}}
        </p>
        <p>
          <Status :status="char.status"/>
          <span v-if="char.species !== 'unknown'">{{char.species | capitalize}} </span>
          <span v-if="char.gender !== 'unknown'">{{char.gender | capitalize}}</span>
        </p>
      </div>
      <div class="row">
        <p class="title">Origin:</p>
        <p class="text"
           :title="char.origin.name | capitalize">
          {{char.origin.name | capitalize}}
        </p>
      </div>
      <div class="row">
        <p class="title">Last known location:</p>
        <p class="text"
           :title="char.location.name | capitalize">
          {{char.location.name | capitalize}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Status from '@/components/Status.vue';

export default {
  name: 'Character',
  props: ['char'],
  components: { Status }
};
</script>

<style lang="scss">
.app main article section.character {
  img {
    width: 100%;
  }

  .content {
    padding: 12px 5px 5px;

    .row {
      margin-top: 5px;

      &.firstRow {
        margin: 0 0 25px 0;
      }

      .title {
        margin-bottom: 2px;
      }
    }
  }

  @media only screen and (min-width: 640px) {
    flex-direction: row;

    img {
      width: 200px;
      height: 200px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      margin-left: 15px;

      .name, .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  @media only screen and (min-width: 900px) {
    width: 500px;
    flex: 1 0 auto;
  }
}
</style>
