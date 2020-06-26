<template>
  <main>
    <Loader v-if="loading"/>
    <Error v-else-if="error"
           :error="error">
    </Error>
    <article v-else>
      <Location v-for="location in currentPageLocations(page)"
                :location="location"
                :key="location.id">
      </Location>
    </article>
    <Pagination v-if="!loading"
                name="locations"
                :numberOfPages="numberOfLocationsPages"
                :page="page">
    </Pagination>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Location from '@/components/Location.vue';
import Pagination from '@/components/Pagination.vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'Locations',
  data () {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['page'],
  components: {
    Location,
    Pagination,
    Loader,
    Error
  },
  computed: {
    ...mapGetters(['currentPageLocations', 'numberOfLocationsPages'])
  },
  methods: {
    ...mapActions(['fetchLocations']),
    fetchData () {
      this.loading = true;
      this.fetchLocations(this.page).then((error) => {
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
