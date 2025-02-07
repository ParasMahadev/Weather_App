<template>
    <header class="header">
      <h1 class="title">{{ title }}</h1>
      <div class="search-icon" @click="onSearchClick" v-if="!searchClicked">
        <!-- Inline SVG for search icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
          />
        </svg>
      </div>
      
      <!-- Show CitySearch component when searchClicked is true -->
      <CitySearch v-if="searchClicked" />
      <RefreshButton />
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  import CitySearch from '@/components/CitySearch.vue';
  import RefreshButton from '@/components/RefreshButton.vue';
  
  export default defineComponent({
    name: 'Header',
    components: {
      CitySearch,
      RefreshButton
    },
    props: {
      title: {
        type: String,
        default: 'Weather App'
      }
    },
    setup() {
      // State to manage whether the CitySearch component is visible
      const searchClicked = ref(false);
  
      // Toggle searchClicked state when the search icon is clicked
      const onSearchClick = () => {
        searchClicked.value = !searchClicked.value;
      };
  
      return {
        searchClicked,
        onSearchClick
      };
    }
  });
  </script>
  
  <style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 2rem;
    background-color: #3498db;
    color: #fff;
    flex-direction: row;
   }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: auto;
  }
  
  .search-icon {
    cursor: pointer;
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  
    svg {
      width: 24px;
      height: 24px;
    }
  }
  </style>
  