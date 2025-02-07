<template>
  <div class="city-tabs">
    <div
      class="tab"
      v-for="city in cities"
      :key="city"
      @click="setActiveCity(city)"
      :class="{ active: activeCity === city }"
    >
      {{ city }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CityTabs",
  props: {
    cities: {
      type: Array as PropType<string[]>,
      required: true,
    },
    activeCity: {
      type: String,
      required: true,
    },
  },
  emits: ["changeCity"],
  methods: {
    setActiveCity(city: string) {
      this.$emit("changeCity", city);
    },
  },
});
</script>

<style scoped lang="scss">
.city-tabs {
  display: flex;
  justify-content: center;
  background-color: #FFFF;
  padding: 1rem;
  color: #000;

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
</style>
