import React,{useState,useEffect} from 'react'
import "./style.css";
import WeatherCard from './weatherCard';
import "./responsive.css";

const Temp = () => {
    const [SearchVal,setSearchVal]=useState("Karachi");
    const [NewInfo,SetNewInfo]=useState({}) //empty object shows that initially its empty.
    const getWeatherInfo= async ()=>{
        const Url=`https://api.openweathermap.org/data/2.5/weather?q=${SearchVal}&units=metric&appid=ee53bc731f292479c61d2ebf018ed62f`;
        try{
            const fetchData= await fetch(Url);
            const res= await fetchData.json();
            console.log(res);
            const {temp,humidity,pressure}=res.main;
            const [{main:weathermood}]=res.weather; //yaha weathermood humna name dia hai "main" property ko destructure krtay huwa.bcuz "main" weather condition ko define krna krna ka lia ajeeb sa lg rha hai
            const {name}=res;
            const {speed}=res.wind;
            const {sunset,country}=res.sys;
            const newWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                sunset,
                country
            }
            SetNewInfo(newWeatherInfo);
        }
        catch(error){ 
            console.log(error);
        }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[])
    return (
        <>
            <div className='main-container'>
                <div className='search'><input type="search" placeholder='search city' className='bar' value={SearchVal} onChange={(event)=>{setSearchVal(event.target.value)}} /><button type='button' className='btn' onClick={getWeatherInfo}>Search</button></div>
                
            <WeatherCard tempInfo={NewInfo}/>
            </div>
        </>
    )
}

export default Temp;