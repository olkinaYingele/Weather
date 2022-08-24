import { selectedCityListStore, citySelectorListStore, cityWeaterListStore } from "../store/cityListStore";
import { defautConfig } from "../config";
import { get } from "svelte/store";
import { getTemp } from "./getWeather";

export const init = function() {
    console.log("in init")
    const savedSelectedCityList = localStorage.getItem("savedSelectedCityListStore")
    selectedCityListStore.set(savedSelectedCityList ? JSON.parse(savedSelectedCityList) : []);
    
    const savedNotSelectedC = localStorage.getItem("savedCitySelectorListStore")
    citySelectorListStore.set(savedNotSelectedC ? JSON.parse(savedNotSelectedC) : defautConfig.defualtCityList);

    for (let i:number = 0; i < get(selectedCityListStore).length; i++) {
        const city:string = get(selectedCityListStore)[i];
        let cityTemp = "loading";
        let w = getTemp(city).then((resp)=>{
            cityWeaterListStore.update(val => [...val, {name:city, temp:resp}])
        })

    }
}