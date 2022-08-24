/**
 * @jest-environment jsdom
 */

import CityWeatherList from './CityWeatherList.svelte';

import { render, fireEvent } from '@testing-library/svelte';
import  {writable} from 'svelte/store';

const mocCityWeatherList:{name:string, temp:string}[] = [{'name':"London", 'temp':'9.0'}, {'name':"Tel Aviv", 'temp':'31.5'}];
const moceOnClick = function(city:string) {
    console.log("in moceOnClick, city = ", city);
} 

describe ('testing CityWeatherList', () => {

    it('testing CityWeather city weather ', async ()=> {
        const store = writable(mocCityWeatherList);

        const { getByText, getAllByText } = render(CityWeatherList, {props:{cityWeatherStore:store, removeSelectedCity:moceOnClick}});

        expect(getByText(/London/)).not.toBeNull;
        expect(getByText(/9.0/)).not.toBeNull;
        expect(getByText(/Tel Aviv/)).not.toBeNull;
        expect(getByText(/31.5/)).not.toBeNull;
        expect(getAllByText("-")).not.toBeNull;
       
    })
    it('it tests button click', async () => {
        const store = writable(mocCityWeatherList);
        const { getAllByText } = render(CityWeatherList, {props:{cityWeatherStore:store, removeSelectedCity:moceOnClick}});
        const button = getAllByText('-')[0];
        await fireEvent.click(button);
    })
})