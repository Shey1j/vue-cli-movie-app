<template>
  <div class="container search">
    <input type="text" placeholder="Search" v-model.lazy="searchInput" @keyup="emitSearchValueToParent" />
    <button v-show="searchInput !== ''" class="button" @click="clearSearch">
      Clear Search
    </button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "movie-search",
  props: {
    searchedMovies: {
      type: Array,
    },
  },
  data() {
      return {
          searchInput: '',
      }
  },
  methods: {
    clearSearch() {
      this.searchInput = "";
      this.$emit("clearSearch");
    },
    emitSearchValueToParent() {
        eventBus.$emit("searchValueChanged", this.searchInput);
    }
  },
};
</script>

<style scoped>
.search {
  display: flex;
  padding: 32px 16px;
}
.search input {
  max-width: 350px;
  width: 100%;
  padding: 12px 6px;
  font-size: 14px;
  border: none;
}
.search input:focus {
  outline: none;
}
.search .button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>