<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Movies from './components/Movies.vue'
export default {
  name: "app",
  components: {
    'movies-home': Movies
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Karla", sans-serif;
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.app {
  background-color: #211f1f;
  min-height: 100vh;
}

.button {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  background-color: #c92502;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease all;
}

.button:hover {
  background-color: #891b02;
}

.button-light {
  background-color: transparent;
  border: 1px solid #c92502;
}

.button-light:hover {
  border-color: transparent;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
