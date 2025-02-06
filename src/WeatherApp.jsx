import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feels_like:17.18,
        temp:17.52,
        tempMin:17.52,
        tempMax:17.52,
        humidity:71,
        weather:"clear sky",
    });

    let updateInfo= (newInfo) =>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Mario</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}