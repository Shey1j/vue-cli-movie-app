<template>
  <div class="home">
    <movie-hero />
    <movie-search @clearSearch="clearSearch" :searchedMovies="searchedMovies" />
    <movie-loading v-if="isLoading" />
    <div v-else>
      <movie-view v-if="!isSearchInputEmpty" :moviesArray="searchedMovies" />
      <movie-view v-else :moviesArray="movies" />
    </div>
    <movie-footer />
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
import Hero from "./Hero.vue";
import Loading from "./Loading.vue";
import MovieSearch from "./MovieSearch.vue";
import MovieView from "./MoviesView.vue";
import Footer from "./Footer.vue";
export default {
  name: "MoviesHome",
  components: {
    "movie-hero": Hero,
    "movie-loading": Loading,
    "movie-search": MovieSearch,
    "movie-view": MovieView,
    "movie-footer": Footer,
  },
  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: "",
      isLoading: false,
    };
  },
  methods: {
    async getMovies() {
      this.loading = true;
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=6124de27f69e554b63b2647195a707e5&language=en-US&page=1`
      );
      const response = await data;
      if (response.data) {
        this.loading = false;
      }
      response.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
    },
    async getSearchedMovies() {
      this.loading = true;
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6124de27f69e554b63b2647195a707e5&query=${this.searchInput}&language=en-US&page=1`
      );
      const response = await data;
      if (response.data) {
        this.loading = false;
      }
      response.data.results.forEach((movie) => {
        this.searchedMovies.push(movie);
      });
    },
    changeSearchInput(value) {
      this.searchInput = value;
    },
    clearSearch() {
      this.searchInput = "";
      this.searchedMovies = [];
    },
  },
  created() {
    eventBus.$on("searchValueChanged", (value) => {
      this.searchInput = value;
    });
  },
  mounted() {
    this.getMovies();
  },
  computed: {
    isSearchInputEmpty() {
      if (this.searchInput !== "") {
        this.getSearchedMovies();
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.home .loading {
  padding-top: 120px;
  align-items: flex-start;
}
</style>