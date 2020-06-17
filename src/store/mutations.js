import * as types from './mutation-types';

export default {
  [types.ADD_CHARACTERS] (state, payload) {
    state.characters = {
      ...state.characters,
      [payload.page]: payload.characters,
      pages: payload.pages
    };
  },
  [types.ADD_LOCATIONS] (state, payload) {
    state.locations = {
      ...state.locations,
      [payload.page]: payload.locations,
      pages: payload.pages
    };
  },
  [types.ADD_EPISODES] (state, payload) {
    state.episodes = {
      ...state.episodes,
      [payload.page]: payload.episodes,
      pages: payload.pages
    };
  }
};
