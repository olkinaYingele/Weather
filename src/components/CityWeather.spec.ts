/**
 * @jest-environment jsdom
 */

import CityWeather from "./CityWeather.svelte";

import { render } from '@testing-library/svelte';

const mocCity:string = "London";
const mocTemp:string = "9.0";


describe ('testing CityWeather', () => {

    it('testing CityWeather city weather ', async ()=> {
        const { getByText } = render(CityWeather, {props:{cityName:mocCity, cityTemp:mocTemp}});

        expect(getByText(/London/)).not.toBeNull;
        expect(getByText(/9.0/)).not.toBeNull;
        expect(getByText(/°C/)).not.toBeNull;
        
    })
})