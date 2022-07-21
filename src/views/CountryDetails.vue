<template>
  <div class="container">
    <div>
      <h1>{{ country.name.common }}</h1>
      <button @click="switchContent">switch content type</button>
      <br>
      <div v-if="!raw">
        <table>
          <tbody>


          <tr>
            <td class="subject">Hauptstadt:</td>
            <td v-if="country.capital">{{ country.capital[0] }}</td>
          </tr>
          <tr>
            <td class="subject">Sprache(n):</td>
            <td v-if="country.languages">
              {{ Object.values(country.languages).join(", ") }}
            </td>
          </tr>
          <tr>
            <td class="subject">Fläche:</td>
            <td>{{ country.area }} km²</td>
          </tr>
          <tr>
            <td class="subject">Einwohner:</td>
            <td>{{ country.population }}</td>
          </tr>

          <tr>
            <td class="subject">Kontinent:</td>
            <td>{{ country.region }}</td>
          </tr>
          <tr>
            <td class="subject">Subregion:</td>
            <td>{{ country.subregion }}</td>
          </tr>
          <tr>
            <td class="subject">Status:</td>
            <td>{{ country.status }}</td>
          </tr>
          <tr>
            <td class="subject">Unabhängig:</td>
            <td>{{ country.independent }}</td>
          </tr>
          <tr>
            <td class="subject">Un-Mitglied:</td>
            <td>{{ country.unMember }}</td>
          </tr>
          <tr v-if="country.currencies">
            <td class="subject">Währung</td>
            <td>{{ getCurrencyAsString() }}</td>
          </tr>
          <tr v-if="country.car">
            <td class="subject">KFZ-Kennzeichen:</td>
            <td>
              {{
                Object.values(country.car.signs).join(", ") +
                " -- " +
                country.car.side
              }}
            </td>
          </tr>
          <tr v-if="country.borders">
            <td class="subject">Nachbarländer:</td>
            <td>{{ (country.borders).join(", ") }}</td>
          </tr>
          <tr v-if="country.postalCode">
            <td class="subject">Post-Code:</td>
            <td>{{ country.postalCode }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <textarea v-if="raw">
        {{ getPrettyJson() }}
      </textarea>
    </div>
    <div class="image" v-if="country.flags">
      <img :src="country.flags[0]" alt="flag" id="img"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

.subject {
  font-weight: bold;
  padding-right: 10px;
}

.image {
  max-width: 50%;

  object-fit: contain;
}

#img {
  height: 60vh;
}

textarea {
  width: 50rem;
  height: 43rem;
  background-color: transparent;
  color: darkgray;
  font-size: large;
}

button {
  background-color: black;
  color: darkgray;
  border: 3px solid darkgray;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}

button:hover {
  border-color: darkcyan;
  color: darkcyan;
}

button:active {
  background-color: darkcyan;
  color: white;
}
</style>

<script lang="ts">
import CountryInterface from "../domain/CountryInterface";

export default {
  name: "CountryDetails",
  async created() {
    await this.fetchCountry();
  },
  methods: {
    async fetchCountry() {
      let name = this.$route.params.name;
      let res: Response = await fetch(
          `https://restcountries.com/v3/name/${name}`
      );
      const data: CountryInterface = await res.json();
      this.country = data[0];
    },
    getCurrencyAsString() {
      let currencyArray: string[] = [];
      let cur = this.country.currencies;
      for (const key in cur) {
        if (Object.prototype.hasOwnProperty.call(cur, key)) {
          const element = cur[key];
          currencyArray.push(
              element.name + " [" + element.symbol + " = " + key + "]"
          );
        }
      }
      return currencyArray.join(", ");
    },
    getPrettyJson() {
      return JSON.stringify(this.country, undefined, 4);
    },
    switchContent() {
      this.raw = !this.raw;
    },
  },
  data() {
    return {
      country: Object as () => CountryInterface,
      raw: false,
    };
  },
};
</script>
