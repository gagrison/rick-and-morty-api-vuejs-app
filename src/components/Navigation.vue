<template>
  <aside>
    <router-link to="/"
                 class="logo"
                 title="Home">
      <img src="@/assets/logo.png"
           alt="logo">
    </router-link>
    <nav>
      <router-link to="characters?page=1">
        <img src="@/assets/characters.png" alt="Characters">
        <p class="text">Characters</p>
      </router-link>
      <router-link to="locations?page=1">
        <img src="@/assets/locations.png" alt="Locations">
        <p class="text">Locations</p>
      </router-link>
      <router-link to="episodes?page=1">
        <img src="@/assets/episodes.png" alt="Episodes">
        <p class="text">Episodes</p>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="scss">
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: $rickandmorty-yellow;

  .logo {
    margin-bottom: 70px;
  }

  img {
    width: 48px;
    height: 48px;
  }

  nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    &.router-link-active, &:hover {
      opacity: 0.5;
    }

    .text {
      display: none;
    }
  }

  @media only screen and (min-width: 640px) {
    img {
      width: 64px;
      height: 64px;
      margin-bottom: 2px;
    }

    nav a {
      margin-bottom: 25px;

      .text {
        display: block;
      }
    }
  }
}
</style>
