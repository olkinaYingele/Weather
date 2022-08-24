import { writable, get } from 'svelte/store';
//import { getTemp } from '../services/getWeather'  
  
import { citySelectorListStore, selectedCityListStore, cityWeaterListStore } from 'src/store/cityListStore';
import { updateLocalStorage } from './updateLocalStorage'

export const removeSelectedCity = function (city:string) {
    //cityListStore.update(val => [...val, city]) // push didn't work
    //console.log("selectedCityListStore = ", get(selectedCityListStore));
    //selectedCityListStore.update(val => val.splice(val.indexOf(city), 1))
    const cityIndex:number = get(selectedCityListStore).indexOf(city)
    if (cityIndex !== -1) {
        selectedCityListStore.update(val => {
            //console.log("val = ", val);
            //console.log("val.indexOf(city) = ", val.indexOf(city))
            val.splice(cityIndex, 1)
            //console.log("val = ", val);
           
            return[...val]
        })
        cityWeaterListStore.update(val => {
            //console.log("val = ", val);
            //console.log("val.indexOf(city) = ", val.indexOf(city))
            val.splice(cityIndex, 1)
            //console.log("val = ", val);
           
            return[...val]
        })
        citySelectorListStore.update(val => [...val, city])
    }
    console.log("selectedCityListStore = ", get(selectedCityListStore));
    updateLocalStorage()
}