<template>
  <footer>
    <p>Copyright {{ getCurrentYear }}</p>
  </footer>
</template>

<script>
export default {
  name: "MoviesFooter",
  data() {
    return {
      currentDate: "",
    };
  },
  computed: {
    getCurrentYear() {
      const now = new Date().getFullYear();
      return now;
    },
  },
};
</script>

<style scoped>
    footer {
        padding: 1.5rem 0;
        background: #a0a0a0;
    }

    p {
        text-align: center;
    }
</style>