<template>
  <h1>Countries</h1>
  <div class="flexing">
    <button :key="countries.id" v-for="country in countries" class="container" @click="showCountry(country.name.common)">
      <Country :country="country" />
    </button>
  </div>
</template>

<script lang="ts">
import Country from "../components/Country.vue";
import CountryInterface from "../domain/CountryInterface";
//import CountryInterface from "../domain/CountryInterface";

export default {
  name: "Countries",
  components: {
    Country,
  },
  data() {
    return {
      countries: Array<CountryInterface>(),
    };
  },
  methods: {
    async fetchCountries() {
      let res: Response = await fetch("https://restcountries.com/v3.1/all");
      return await res.json();
    },
    showCountry(cName: string) {
      this.$router.push({ name: "country", params: { name: cName } });
    },
  },
  async created() {
    this.countries = await this.fetchCountries();
  },
};
</script>

<style scoped>
.flexing {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 0 -15px;
}
.container {
  display: inline-block;
  width: 500px;
  margin: 10px;
}
button {
  color: var(--color-text);
  background: var(--color-background);
  font-weight: normal;
  text-align: left;
  font-size: 15px;
  line-height: 1.6;
  border: none;
}
</style>
