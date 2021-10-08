<template>
  <div class="single-movie container">
    <loading-state v-if="isLoading" />
    <div v-else>
      <a class="button" @click.prevent="$router.go(-1)"> Back </a>
      <div class="movie-info">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
        </div>
        <div class="movie-content">
          <h1>Title: {{ movie.title }}</h1>
          <p class="movie-fact tagline">
            <span>Tagline:</span> "{{ movie.tagline }}"
          </p>
          <p class="movie-fact">
            <span>Released:</span>
            {{
              new Date(movie.release_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <p class="movie-fact">
            <span>Duration:</span> {{ movie.runtime }} minutes
          </p>
          <p class="movie-fact">
            <span>Revenue:</span>
            {{
              movie.revenue.toLocaleString("en-us", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
          <p class="movie-fact"><span>Overview:</span> {{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from './Loading.vue'
export default {
  name: "single-movie",
  components: {
    'loading-state': Loading
  },
  data() {
    return {
      movie: "",
      isLoading: true,
    };
  },
  computed: {
    getMovieId() {
      const movieId = this.$route.params.movieId;
      return movieId;
    },
  },
  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.getMovieId}?api_key=6124de27f69e554b63b2647195a707e5&language=en-US`
      );
      const result = await data;
      if (result.data) {
        this.isLoading = false;
      }
      this.movie = result.data;
    },
  },
  mounted() {
      this.getSingleMovie();
  }
};
</script>

<style scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
}
.button {
  align-self: flex-start;
  margin-bottom: 32px;
}
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: #fff;
}
@media (min-width: 800px) {
  .movie-info {
    flex-direction: row;
    align-items: flex-start;
  }
}
.movie-img img {
  max-height: 500px;
  width: 100%;
}
@media (min-width: 800px) {
  .movie-img img {
    max-height: 700px;
    width: initial;
  }
}
.movie-content h1 {
  font-size: 56px;
  font-weight: 400;
}
.movie-fact {
  margin-top: 12px;
  font-size: 20px;
  line-height: 1.5;
}
.movie-fact span {
  font-weight: 600;
  text-decoration: underline;
}
.tagline {
  font-style: italic;
}
.tagline span {
  font-style: normal;
}
</style>