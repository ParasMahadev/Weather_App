<template>
  <button class="refresh-btn" @click="refreshWeather">Refresh</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RefreshButton',
  methods: {
    refreshWeather() {
      this.$emit('refresh');
    }
  }
});
</script>

<style scoped lang="scss">
.refresh-btn {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
}
</style>
