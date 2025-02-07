<template>
  <div id="app">
    <Header :title="'Weather App in VueJS'" />
    <!-- Main Content -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useWeatherStore } from "./store/weather";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup() {
    const weatherStore = useWeatherStore();

    const activeCity = ref(weatherStore.selectedCity);
    // Initial data fetch
    weatherStore.fetchWeather(activeCity.value);
    weatherStore.fetchForecast(activeCity.value);

    return {
      activeCity,
    };
  },
});
</script>

<style scoped lang="scss">
.app-title {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-top: 20px;
}

.city-tabs {
  display: flex;
  justify-content: center;
  background-color: #3498db;
  padding: 1rem;
  color: white;

  .tab {
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 4px;
    margin: 0 10px;

    &.active {
      background-color: #2ecc71;
    }

    &:hover {
      background-color: #2980b9;
    }
  }
}

.weather-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
