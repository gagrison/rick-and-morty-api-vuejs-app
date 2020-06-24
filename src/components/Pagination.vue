<template>
  <footer>
    <div>
      <router-link tag="button"
                   :to="prevPage"
                   :disabled="page === 1">
        Prev
      </router-link>
      <router-link tag="button"
                   :to="nextPage"
                   :disabled="page === numberOfPages">
        Next
      </router-link>
    </div>
    <p>
      <span>Page {{page}}</span>
      <span v-if="numberOfPages">/{{numberOfPages}}</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Pagination',
  props: [
    'name',
    'numberOfPages',
    'page'
  ],
  computed: {
    prevPage () {
      return `/${this.name}?page=${this.page - 1}`;
    },
    nextPage () {
      return `/${this.name}?page=${this.page + 1}`;
    }
  }
};
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  div {
    display: flex;
    margin-bottom: 10px;
  }

  button {
    width: 100px;
    height: 35px;
    border: 1px solid $rickandmorty-brown;
    border-radius: 5px;
    margin: 0 10px;
    background-color: $rickandmorty-yellow;
    font-size: 16px;
    cursor: pointer;

    &:active, &:hover {
      opacity: 0.8;
    }

    &[disabled] {
      opacity: 0.35;
      cursor: initial;
    }
  }
}
</style>
