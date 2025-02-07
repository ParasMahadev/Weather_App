<template>
  <div class="weather-card">
    <h2> Next hours</h2>
    <div v-if="weather">
      <p>{{ weather?.main?.temp }}°C</p>
      <p>{{ weather?.weather[0]?.description }}</p>
      <img :src="getWeatherIcon(weather?.weather[0]?.icon)" alt="weather icon" />
    </div>
    <p v-else>Loading weather...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'WeatherCard',
  props: {
    city: {
      type: String,
      required: true
    },
    weather: {
      type: Object as PropType<any>,
      required: false
    }
  },
  methods: {
    getWeatherIcon(iconCode: string): string {
      return `http://openweathermap.org/img/wn/${iconCode}.png`;
    }
  }
});
</script>

<style scoped lang="scss">
.weather-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.weather-card img {
  width: 50px;
  height: 50px;
}
</style>
