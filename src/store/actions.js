/* eslint-disable consistent-return */
import axios from 'axios';
import * as types from './mutation-types';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

export default {
  fetchCharacters (context, page) {
    // If data is already fetched then skip
    if (!context.state.characters[page]) {
      return axios.get(`character?page=${page}`).then((response) => {
        context.commit({
          type: types.ADD_CHARACTERS,
          characters: response.data.results,
          pages: response.data.info.pages,
          page
        });
      }).catch((error) => error);
    }
  },
  fetchLocations (context, page) {
    // If data is already fetched then skip
    if (!context.state.locations[page]) {
      return axios.get(`location?page=${page}`).then((response) => {
        context.commit({
          type: types.ADD_LOCATIONS,
          locations: response.data.results,
          pages: response.data.info.pages,
          page
        });
      }).catch((error) => error);
    }
  },
  fetchEpisodes (context, page) {
    // If data is already fetched then skip
    if (!context.state.episodes[page]) {
      return axios.get(`episode?page=${page}`).then((response) => {
        context.commit({
          type: types.ADD_EPISODES,
          episodes: response.data.results,
          pages: response.data.info.pages,
          page
        });
      }).catch((error) => error);
    }
  }
};
