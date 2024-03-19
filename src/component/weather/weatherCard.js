import React, { useEffect, useState } from 'react';

const WeatherCard = ({ tempInfo }) => {
    const { temp, humidity, pressure, weathermood, name, speed, sunset, country } = tempInfo //basically yaha humna yeh kia ka pehla "weatherCard" ko parent component ma call krka waha prop ka through data pass kia that is an object or ab yaha usko get krka destructure krdia.
    const [weatherIcon, setweatherIcon] = useState("");
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setweatherIcon("wi wi-day-cloudy");
                    break;
                case "Clear":
                    setweatherIcon("wi wi-day-sunny");
                    break;
                case "Mist":
                    setweatherIcon("wi wi-day-haze");
                    break;
                case "Rain":
                    setweatherIcon("wi wi-day-showers");
                    break;
                case "Sunny":
                    setweatherIcon("wi wi-day-sunny");
                    break;
                case "Smoke":
                    setweatherIcon("wi wi-smoke");
                    break;
                case "Haze":
                    setweatherIcon("wi wi-day-haze");
                    break;
                case "Snow":
                    setweatherIcon("wi wi-day-snow");
                    break;
                default:
                    setweatherIcon("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec * 1000); //here we first convert "sec" into milliSecond and then "gethours" & "getminutes" from their.
    let getTime = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className='dashboard'>
                <div className="weatherIcon1">
                    <i className={weatherIcon}></i>{/*The <i> </i>tag and span tag is used to add icon.  The content inside is typically displayed in italic. */}
                </div>
                <div className="weatherinfo">
                    <div className="temp-des">
                        <div className="temperature">
                            <span>{temp}&deg;</span>
                        </div>
                        <div className="description">
                            <div className="weatherconditon">{weathermood}</div><div className="place">{name},{country}</div>
                        </div>
                    </div>
                    <div className="date">
                        {new Date().toDateString()}
                    </div>
                </div>
                <div className="extra-temp">
                    <div className="temp-min temp">
                        <div className="i1 i"><i className={"wi wi-sunset"}></i></div>
                        <div className="text"><p>{getTime} PM<br /> Sunset</p></div>
                    </div>
                    <div className="temp-rain temp">
                        <div className="i2 i"><i className={"wi wi-humidity"}></i></div>
                        <div className="text"><p>{humidity}<br />Humidity</p></div>
                    </div>
                    <div className="temp- temp">
                        <div className="i2 i"><i className={"wi wi-rain"}></i></div>
                        <div className="text"><p>{pressure}<br />Pressure</p></div>
                    </div>
                    <div className="temp- temp">
                        <div className="i2 i"><i className={"wi wi-strong-wind"}></i></div>
                        <div className="text"><p>{speed}<br />Wind</p></div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;