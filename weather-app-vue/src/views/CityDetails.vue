<template>
  <div>
    <WeatherCard />
    <WeatherForecast />
  </div>
</template>

<script setup>
import WeatherCard from '@/components/WeatherCard.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';

const props = defineProps({
  name: String
});
</script>
