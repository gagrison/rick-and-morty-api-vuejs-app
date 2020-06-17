<template>
  <main>
    <Loader v-if="loading"/>
    <Error v-else-if="error"
           :error="error">
    </Error>
    <section v-else>
      <Character v-for="character in currentPageCharacters(page)"
                 :key="character.id"
                 :char="character">
      </Character>
    </section>
    <Pagination v-if="!loading"
                name="characters"
                :numberOfPages="numberOfCharactersPages"
                :page="page">
    </Pagination>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Character from '@/components/Character.vue';
import Pagination from '@/components/Pagination.vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'Characters',
  data () {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['page'],
  components: {
    Character,
    Pagination,
    Loader,
    Error
  },
  computed: {
    ...mapGetters(['currentPageCharacters', 'numberOfCharactersPages'])
  },
  methods: {
    ...mapActions(['fetchCharacters']),
    fetchData () {
      this.loading = true;
      this.fetchCharacters(this.page).then((error) => {
        this.loading = false;
        this.error = error;
      });
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    '$route.query.page': 'fetchData'
  }
};
</script>
