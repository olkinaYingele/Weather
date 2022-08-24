

import { getTemp } from './getWeather'


//const enableFetchMocks = require('jest-fetch-mock')
//enableFetchMocks.default()

const fakeData = {"location":
          {"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.52,"lon":-0.11,
            "tz_id":"Europe/London","localtime_epoch":1651268383,"localtime":"2022-04-29 22:39"}
          ,"current":
          {"last_updated_epoch":1651267800,"last_updated":"2022-04-29 22:30","temp_c":9.0,"temp_f":48.2,"is_day":0,
            "condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},
            "wind_mph":3.8,"wind_kph":6.1,"wind_degree":40,"wind_dir":"NE","pressure_mb":1032.0,"pressure_in":30.47,"precip_mm":0.0,"precip_in":0.0,
            "humidity":57,"cloud":75,"feelslike_c":7.9,"feelslike_f":46.3,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":7.2,"gust_kph":11.5}}
describe ("Testing weather get temp", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }),) as jest.Mock;
  

  });
  
  it("temp in London", async () => {
    //fetchMock.mockResponseOnce();
  
    const temp = await getTemp("London");
  
    expect(temp).toEqual(9.0);
  });  

})