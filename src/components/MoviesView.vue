<template>
  <div class="container movies">
    <div id="movie-grid" class="movies-grid">
      <div class="movie" v-for="movie in moviesArray" :key="movie.id">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
          <p class="review">{{ movie.vote_average }}</p>
          <p class="overview">{{ movie.overview }}</p>
        </div>
        <div class="info">
          <p class="title">
            {{ movie.title.slice(0, 25)
            }}<span v-if="movie.title.length > 0">...</span>
          </p>
          <p class="release">
            Released:
            {{
              new Date(movie.release_date).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <router-link
              class="button button-light"
              :to="{name: 'single-movie', params: {movieId: movie.id}}"
              >Get More Info</router-link
            >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movies-view",
  props: {
    moviesArray: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.movies {
  padding: 32px 16px;
}
.movies .movies-grid {
  display: grid;
  column-gap: 32px;
  row-gap: 64px;
  grid-template-columns: 1fr;
}
@media (min-width: 500px) {
  .movies .movies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 750px) {
  .movies .movies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1100px) {
  .movies .movies-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.movie {
  position: relative;
  display: flex;
  flex-direction: column;
}
.movie-img {
  position: relative;
  overflow: hidden;
}
.movie-img:hover .overview {
  transform: translateY(0);
}
.movie-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.movie-img .review {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #c92502;
  color: #fff;
  border-radius: 0 0 16px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.movie-img .overview {
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  background-color: rgba(201, 38, 2, 0.9);
  padding: 12px;
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s ease-in-out all;
}
.info {
  margin-top: auto;
}
.info .title {
  margin-top: 8px;
  color: #fff;
  font-size: 20px;
}
.info .release {
  margin-top: 8px;
  color: #c9c9c9;
}
.info .button {
  margin-top: 8px;
}
</style>