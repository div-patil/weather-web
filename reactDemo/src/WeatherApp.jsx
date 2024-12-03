import { useState } from 'react';
import SearchBox from './searchBox';
import SearchInfo from './searchInfo';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"pune",
        feelsLike: 30.07,
        humidity: 39,
        temp: 30.43,
        tempMax: 30.43,
        tempMin: 30.43,
        weather: "few clouds"
    });
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <>
        <div>
            <h1>Weather App</h1>
        </div>
        <SearchBox updateInfo={updateInfo}/>
        <SearchInfo info={weatherInfo}/>
        </>
    )
}