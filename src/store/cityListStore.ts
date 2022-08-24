import { writable, get } from 'svelte/store';
  
export const selectedCityListStore = writable<string[]>([])
export const citySelectorListStore = writable<object[]>([])
export const cityWeaterListStore = writable<object[]>([])

// export const selectCity = function (city:string) {
//     updateLocalStorage()
// }

// export const removeSelectedCity = function (city:string) {
//     updateLocalStorage()
// }


// function updateLocalStorage() {
//     localStorage.setItem("savedSelectedCityListStore",   JSON.stringify(get(selectedCityListStore)));
//     localStorage.setItem("savedCitySelectorListStore",   JSON.stringify(get(citySelectorListStore)));
//   }
