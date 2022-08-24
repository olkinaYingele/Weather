<script  lang="ts">
    import type { Writable } from 'svelte/store';

    import CityWeather from './CityWeather.svelte';
    export let cityWeatherStore:Writable<{name:string, temp:number}[]> 
    export let removeSelectedCity:Function;

</script>

{#each $cityWeatherStore as city}
     <!-- <CityWeather cityName={city.name} cityTemp={city.temp} removeSelectedCity={removeSelectedCity} /> -->
     <CityWeather cityName={city.name} cityTemp={city.temp} />
     <button on:click={() => removeSelectedCity(city.name)}> - </button>
 {/each}
