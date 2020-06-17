export default {
  currentPageCharacters: (state) => (page) => state.characters[page],
  numberOfCharactersPages: (state) => state.characters.pages,
  currentPageLocations: (state) => (page) => state.locations[page],
  numberOfLocationsPages: (state) => state.locations.pages,
  currentPageEpisodes: (state) => (page) => state.episodes[page],
  numberOfEpisodesPages: (state) => state.episodes.pages
};
