<template>
    <h1>About this Page</h1>
    <p>This is a simple about page written in Vue3.js</p>
    <p>The data is provided by <a href="https://restcountries.com/#api-endpoints-v3"> restcountries.com</a></p>
</template>

<script>
export default {
  components: {
    name: `About`,
  },
};
</script>

<style>
  a{
    text-decoration: underline dotted gray;
    color: gray;
  }
  a:hover{
    text-decoration: underline solid gray;
    color: lightgray;
  }
</style>
