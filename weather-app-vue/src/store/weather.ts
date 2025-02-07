import { defineStore } from 'pinia';

const API_KEY = "482944e26d320a80bd5e4f23b3de7d1f";

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    // Default cities for the tabs
    cities: ['Rio de Janeiro', 'Beijing', 'Los Angeles'],
    // Set the default selected city to the first one
    selectedCity: 'Rio de Janeiro',
    cityData: {},
    forecastData: [],
    error: null,
  }),

  actions: {
    // Update the selected city in the store
    setSelectedCity(city: string) {
      this.selectedCity = city;
    },

    async fetchWeather(city: string) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        this.cityData = await response.json();
        console.log(this.cityData)
      } catch (error: any) {
        console.log(error)
        this.error = error;
      }
    },

    async fetchForecast(city: string) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        // Extract the forecast list (which is an array) from the response object
        this.forecastData = data.list;
        console.log(this.forecastData);
      } catch (error: any) {
        console.log(error)
        this.error = error;
      }
    }
  }
});
