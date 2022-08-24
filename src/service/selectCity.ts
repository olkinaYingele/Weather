import { writable, get } from 'svelte/store';
import { getTemp } from './getWeather'  
  
import { citySelectorListStore, selectedCityListStore, cityWeaterListStore } from '../store/cityListStore';
import { updateLocalStorage } from './updateLocalStorage'

export const selectCity = function (city:string) {
    console.log("in selectCity city = ", city)
    if (get(selectedCityListStore).indexOf(city) === -1) {
        selectedCityListStore.update(val => [...val, city]) // push didn't work
        let cityTemp = "loading";
        let w = getTemp(city).then((resp)=>{
            cityWeaterListStore.update(val => [...val, {name:city, temp:resp}])
        })
        console.log("in if selectedCityListStore = ", get(selectedCityListStore))
    
    }
    updateLocalStorage()
}
