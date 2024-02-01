import React, {useEffect, useState} from "react";
import './Weather.scss';
import axios from 'axios';
import d01 from '../../../Assets/Images/Weather_Icons/01d.png';
import n01 from '../../../Assets/Images/Weather_Icons/01n.png';
import d02 from '../../../Assets/Images/Weather_Icons/02d.png';
import n02 from '../../../Assets/Images/Weather_Icons/02n.png';
import d03 from '../../../Assets/Images/Weather_Icons/03d.png';
import n03 from '../../../Assets/Images/Weather_Icons/03n.png';
import d04 from '../../../Assets/Images/Weather_Icons/04d.png';
import n04 from '../../../Assets/Images/Weather_Icons/04n.png';
import d09 from '../../../Assets/Images/Weather_Icons/09d.png';
import n09 from '../../../Assets/Images/Weather_Icons/09n.png';
import d10 from '../../../Assets/Images/Weather_Icons/10d.png';
import n10 from '../../../Assets/Images/Weather_Icons/10n.png';
import d11 from '../../../Assets/Images/Weather_Icons/11d.png';
import n11 from '../../../Assets/Images/Weather_Icons/11n.png';
import d13 from '../../../Assets/Images/Weather_Icons/13d.png';
import n13 from '../../../Assets/Images/Weather_Icons/13n.png';
import d50 from '../../../Assets/Images/Weather_Icons/50d.png';
import n50 from '../../../Assets/Images/Weather_Icons/50n.png';


const Weather = () => {    
    const [data, setData] = useState({});
    const [icon, setIcon] = useState('');
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.214902485815943&lon=162.3656715224315&units=imperial&appid=bf43e9795ae689edfb33818d17cbadd8';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
            const currentIcon = data.weather[0].icon;
            switch (currentIcon) {
                case '01d':
                    setIcon(d01);
                    break;
                case '01n':
                    setIcon(n01);
                    break;
                case '02d':
                    setIcon(d02);
                    break;
                case '02n':
                    setIcon(n02);
                    break;
                case '03d':
                    setIcon(d03);
                    break;
                case '03n':
                    setIcon(n03);
                    break;
                case '04d':
                    setIcon(d04);
                    break;
                case '04n':
                    setIcon(n04);
                    break;
                case '09d':
                    setIcon(d09);
                    break;
                case '09n':
                    setIcon(n09);
                    break;
                case '10d':
                    setIcon(d10);
                    break;
                case '10n':
                    setIcon(n10);
                    break;
                case '11d':
                    setIcon(d11);
                    break;
                case '11n':
                    setIcon(n11);
                    break;
                case '13d':
                    setIcon(d13);
                    break;
                case '13n':
                    setIcon(n13);
                    break;
                case '50d':
                    setIcon(d50);
                    break;
                case '50n':
                    setIcon(n50);
                    break;
                default:
                    setIcon(d01);
            }
        });
    }, [])

    return (
        <>    
            <div className="featured" id="Weather">
                <h1>Current Weather in Taniti</h1>
                <div className="weather">
                    <div className="temp">
                        <h2>Temperature:</h2>
                        <h3>Current: </h3>{data.main ? <span>{Math.round(data.main.temp)}&deg;F</span> : null}
                        <h3>Feels Like: </h3>{data.main ? <span>{Math.round(data.main.feels_like)}&deg;F</span> : null}
                    </div>
                    <div className="description">
                        <h2>Skies: </h2>
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                        <img src={icon} alt="" />
                    </div>
                    <div className="humidity">
                        <h2>Humidity: </h2>{data.main ? <span>{Math.round(data.main.humidity)}%</span> : null}
                    </div>
                    <div className="wind">
                        <h2>Wind:</h2>
                        <h3>Speed: </h3>{data.wind ? <span>{Math.round(data.wind.speed)}mph</span> : null}
                        <h3>Gusts: </h3>{data.wind ? <span>{Math.round(data.wind.gust)}mph</span> : null}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Weather;