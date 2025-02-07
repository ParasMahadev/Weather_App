<template>
  <h3>Next 5 days</h3>
  <div class="forecast" v-if="forecast">
    <div v-for="(day, index) in forecast?.slice(0, 5)" :key="index" class="forecast-day">
      <img :src="getWeatherIcon(day?.weather[0]?.icon)" alt="weather icon" />
      <div>
        <p>{{ formatDate(day?.dt_txt) }}</p>  <!-- Updated -->
        <p>{{ day?.weather[0]?.description }}</p>
      </div>
      <p>{{ day?.main?.temp }}°C</p>
    </div>
  </div>
  <p v-else>Loading forecast...</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'WeatherForecast',
  props: {
    forecast: {
      type: Array as PropType<any[]>,
      required: false
    }
  },
  methods: {
    getWeatherIcon(iconCode: string): string {
      return `http://openweathermap.org/img/wn/${iconCode}.png`;
    },
    formatDate(dateString: string): string {
      if (!dateString) return "";
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",   // "Fri"
        month: "short",     // "Nov"
        day: "numeric"      // "1"
      }).format(date);
    }
  }
});
</script>

<style scoped lang="scss">
.forecast {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;

  .forecast-day {
    display: flex;
    flex-direction: row;
    text-align: left;
    // margin-bottom: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 50px;
  }

  .forecast-day img {
    width: 40px;
    height: 40px;
  }
}
</style>
