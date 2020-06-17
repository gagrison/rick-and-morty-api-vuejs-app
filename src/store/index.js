import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // characters: {
    //   pages: Number,
    //   [pageNumber]: Array<Character>
    // }
    characters: {},
    // locations: {
    //   pages: Number,
    //   [pageNumber]: Array<Location>
    // }
    locations: {},
    // episodes: {
    //   pages: Number,
    //   [pageNumber]: Array<Episode>
    // }
    episodes: {}
  },
  mutations,
  actions,
  getters
});
