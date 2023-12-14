//openweather website

import { useState } from "react";

const WeatherApp = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const api = {
        key : "666f3b533d958160b6462fc0279c3f69",
        base : "https://api.openweathermap.org/data/2.5/weather"
    }

    var box2=document.getElementById('box2');
    function handleSearch() {
        fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(d=>setWeather(d))
        
        box2.style.visibility='visible'
    }

    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(success, error)
    function success(position) {
        lat=position.coords.latitude;
        lon=position.coords.longitude;

    }
    function error() {
    alert('Error getting your current position');
    }

    function location() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
        .then(res=>res.json())
        .then(d=>setWeather(d)) 

        box2.style.visibility='visible'
       
    }  

    
    
    return(
        <section>
            <div id="box">
                <div id="box1">
                    <h2>Weather Forecast</h2>
                    <div>
                    <span style={{fontSize:'18px',fontWeight:'600'}}>Enter any city name :</span>
                        <div>
                            <input type="search" onChange={(e)=>setSearch(e.target.value)} />
                            <button id="b1" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                    <button id="b2" onClick={location}>Live Location📍</button>
                </div>
                <hr />
                <div id="box2">
                    { (typeof weather.main !== 'undefined')? (
                            <div>
                                <p>City : <u style={{textDecorationColor:'black'}}>{weather.name}</u> <i class="fa-solid fa-location-dot"></i></p>
                                <p>Temperature : <u style={{textDecorationColor:'black'}}>{weather.main.temp}℃</u></p>
                                <p>Status : <u style={{textDecorationColor:'black'}}>{weather.weather[0].main}</u></p>
                                <p>Description : <u style={{textDecorationColor:'black'}}>{weather.weather[0].description}</u></p>
                            </div>
                        ) : ("Not Fount❌")
                    }
                </div>
            </div>
        </section>
    )
}
export default WeatherApp

