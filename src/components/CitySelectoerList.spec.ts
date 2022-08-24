/**
 * @jest-environment jsdom
 */


//import CitySelectoerList from "./components/CitySelectoerList.svelte";
//import CitySelectorListStore from 'component'
import { render, fireEvent } from '@testing-library/svelte';
import { writable, type Writable } from 'svelte/store';
import CitySelectoerList from './CitySelectoerList.svelte';
const mocData = ["test1", "test2"];
const mocData2 = ["test3", "test4"];
const mocSelectCity = function(city:string) {
    console.log("in mocSelectCity, city = ", city);
    mocData.splice(mocData.indexOf(city), 1);
} 

describe ('CitySelectorListStore', () => {
    
    
    it('it check list', async ()=> {
        const store = writable(mocData);
        const { getByText, component } = render(CitySelectoerList, {props:{listStore:store}});

        //console.log(getByText('test1'));
        expect(getByText('test1')).not.toBeNull
        expect(getByText('test2')).not.toBeNull
        //check how to determan node not exisist
        //console.log(getByText('test2'));
        await store.set(mocData2);
        
        expect(getByText('test3')).not.toBeNull


        //expect(getByText('test1'))
    })

    it ('it click on city',async () => {
        const store = writable(mocData);
        const { getByText, component } = render(CitySelectoerList, {props:{listStore:store, selectCity:mocSelectCity}});
        console.log("in it click on city");
        const cityToTest = 'test1';

        const divTest1:HTMLElement = getByText(cityToTest);
        expect(divTest1).not.toBeNull;

        await fireEvent.click(divTest1 as HTMLElement)
        expect(mocData.indexOf(cityToTest)).toBe(-1);
        
    })
})