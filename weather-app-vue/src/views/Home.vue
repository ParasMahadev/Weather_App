<template>
  <div>
  <!-- CityTabs: When a city is clicked, onCityChange is triggered -->
    <CityTabs
      :cities="weatherStore.cities"
      :activeCity="weatherStore.selectedCity"
      @changeCity="onCityChange"
    />
    <!-- WeatherCard: Receives the selected city and weather data as props -->
    <WeatherCard :city="weatherStore?.selectedCity" :weather="weatherStore?.cityData" />
    <WeatherForecast :city="weatherStore?.selectedCity" :forecast="weatherStore?.forecastData" />
   
    <RefreshButton :city="weatherStore?.selectedCity"/>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useWeatherStore } from '@/store/weather';
import CityTabs from '@/components/CityTabs.vue';
import WeatherCard from '@/components/WeatherCard.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';


export default defineComponent({
  name: 'Home',
  components: {
    CityTabs,
    WeatherCard,
    WeatherForecast,
  },
  setup() {
    // Use the weather store
    const weatherStore = useWeatherStore();

    // Fetch data for the default city on initialization
    weatherStore.fetchWeather(weatherStore.selectedCity);
    weatherStore.fetchForecast(weatherStore.selectedCity);

    // Update the store's selected city and fetch new data when a city is changed
    const onCityChange = (city: string) => {
      weatherStore.setSelectedCity(city);
      weatherStore.fetchWeather(city);
      weatherStore.fetchForecast(city);
    };

    return {
      weatherStore,
      onCityChange,
    };
  },
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
</style>
