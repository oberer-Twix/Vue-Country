<template>
  <div class="box">
    <div class="image">
      <img :src="country.flags.png" alt="flag"/>
    </div>
    <div class="content">
      <table>
        <tbody>


        <tr>
          <td class="subject">Land:</td>
          <td>{{ country.name.common }}</td>
        </tr>
        <tr v-if="country.capital">
          <td class="subject">Hauptstadt:</td>
          <td>
            {{ country.capital[0] }}
          </td>
        </tr>
        <tr v-if="country.languages">
          <td class="subject">Sprache(n):</td>
          <td>{{ getArrayAsStrign(4, Object.values(country.languages)) }}</td>
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
          <td class="subject">Subregion:</td>
          <td>{{ country.subregion }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import CountryInterface from "../domain/CountryInterface";

export default {
  name: `Country`,
  props: {
    country: {
      type: Object as () => CountryInterface,
      required: true,
    },
  },
  methods: {
    getArrayAsStrign(length: number, array: string[]): string {
      if (array.length > length) {
        array.length = length;
        array.push("...");
      }
      return array.join(", ");
    },
  },
};
</script>

<style scoped>

.box {
  border: 1px solid darkgray;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.image {
  width: 50%;
}

img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.content {
  margin: 10px;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-left: 1px solid darkgray;
  padding-left: 5px;
}

.subject {
  font-weight: bold;
  padding-right: 5px;
}
</style>
