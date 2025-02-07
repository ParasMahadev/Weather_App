<template>
  <div class="city-search">
    <input
      type="text"
      v-model="searchTerm"
      @input="searchCity"
      placeholder="Search city..."
    />
    <div v-if="searchResults.length > 0" class="search-results">
      <div
        class="search-result"
        v-for="(city, index) in searchResults"
        :key="index"
        @click="selectCity(city)"
      >
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CitySearch",
  setup() {
    const searchTerm = ref("");
    const searchResults = ref<any[]>([]);

    const searchCity = async () => {
      if (searchTerm.value.length > 2) {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/cities?city=${searchTerm.value}&key=482944e26d320a80bd5e4f23b3de7d1f`
        );
        const data = await response.json();
        searchResults.value = data.data;
      }
    };

    const selectCity = (city: any) => {
      // Emit selected city (you may want to use Pinia or Vuex for state management)
      console.log("Selected city:", city);
    };

    return { searchTerm, searchResults, searchCity, selectCity };
  },
});
</script>

<style scoped lang="scss">
.city-search {
  position: relative;
  // width: 300px;
  // margin: 1rem auto;

  .search-results {
    position: absolute;
    width: 100%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    .search-result {
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
