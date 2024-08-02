<template>
  <main>
  <header class="header">
    <img src="/logo.svg" alt="logo" class="header-logo">
    <h2>My Favorite Movies</h2>
  </header>
  <div class="tabs">
    <button :class="['btn', {btn_green: userStore.activeTab === 1}]" @click="userStore.activeTabs(1)">Favorite</button>
    <button :class="['btn', {btn_green: userStore.activeTab === 2}]" @click="userStore.activeTabs(2)">Search</button>
  </div>
  <div class="movies" v-if="userStore.activeTab === 1">
    <div>
      <h3>Watched Movies</h3>
      <p>Просмотрено фильмов: {{ userStore.watchedMovies.length }}</p>
    <Movie 
      v-for="movie of userStore.watchedMovies"
      :key="movie.id"
      :movie="movie"
    />
    </div>
    <h3>All Movies</h3>
    <p>Всего фильмов: {{ userStore.counterMovies}}</p>
    <Movie 
      v-for="movie of userStore.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
  <div class="search" v-else="userStore.activeTab === 2">
    Search
    <Search/>

  </div>
</main>
</template>

<script setup>
  import { useUserStore } from "./stores/UserStore";
  import Movie from "./components/Movie.vue";
  import Search from "./components/Search.vue"

  const userStore = useUserStore();
</script>

<style lang="css">
  .header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
