<template>
  <main>
    <Loader v-if="loading"/>
    <Error v-else-if="error"
           :error="error">
    </Error>
    <section v-else>
      <Episode v-for="episode in currentPageEpisodes(page)"
               :episode="episode"
               :key="episode.id">
      </Episode>
    </section>
    <Pagination v-if="!loading"
                name="episodes"
                :numberOfPages="numberOfEpisodesPages"
                :page="page">
    </Pagination>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Episode from '@/components/Episode.vue';
import Pagination from '@/components/Pagination.vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'Episodes',
  data () {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['page'],
  components: {
    Episode,
    Pagination,
    Loader,
    Error
  },
  computed: {
    ...mapGetters(['currentPageEpisodes', 'numberOfEpisodesPages'])
  },
  methods: {
    ...mapActions(['fetchEpisodes']),
    fetchData () {
      this.loading = true;
      this.fetchEpisodes(this.page).then((error) => {
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
