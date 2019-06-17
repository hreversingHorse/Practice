import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({name}) => {
    const [weather, setWeather] = useState(null)

    const getWeather = () => {
        console.log('http://api.apixu.com/v1/current.json?key=6554d99cfddb4c41a1024441191306&q=' + name)
        axios.get('http://api.apixu.com/v1/current.json?key=6554d99cfddb4c41a1024441191306&q=' + name).then(response => {
            setWeather(response.data)
        })
    }

    useEffect(getWeather,[])

    const rows = () => {
        return (
            <div>
                { weather && <h1>Weather in {weather.location.name}</h1>}
                { weather && <p>Temperature: {weather.current.temp_c} C</p>}
                { weather && <p>Wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>}
            </div>
        )
    }

    console.log(weather)
    return (
        <div>
            {rows()}
        </div>
    );
};


export default Weather;
