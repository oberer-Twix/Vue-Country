<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
</script>

<script>
export default {
  components: {
    name: `App`,
    components: {
      Header,
      Footer,
      Content,
    },
  },
};
</script>

<template>
  <Header />
  <Content />
  <Footer />
</template>

<style>
@import "./assets/base.css";
</style>
