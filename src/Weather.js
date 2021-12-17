import React, {useState} from 'react'
import {useQuery} from '@apollo/client'
import {WEATHER_LVIV} from "./graphQl/WeatherGraphQl";
import {Grid} from "@mui/material";
import LeftBar from "./element/LeftBar/LeftBar";
import Highlights from "./element/Highlights/Highlights";


export const Weather = () => {
    const [city, setCity] = useState('London')
    const [isChecked, setCheck] = useState(true)
    const {data, loading, error} = useQuery(WEATHER_LVIV, {
        variables: {name: city}
    })

    const changeCity = (name) => {
        setCity(name ?? 'London')
    }

    if (error) {
        return <div>{error}</div>
    }

    return <Grid container>
        <Grid sx={{height: '100vh', background: 'white', padding: 4, zIndex: 1000, boxShadow: 15}} item xs={3}>
            <LeftBar
                time={data?.getCityByName?.weather.timestamp}
                loading={loading}
                dataWeather={data?.getCityByName}
                cityName={city}
                isChecked={isChecked}
                changeCity={changeCity}/>
        </Grid>
        <Grid item sx={{background: 'f6f6f8'}} xs={9}>
            <Highlights
                coords={data?.getCityByName?.coord}
                loading={loading}
                dataWeather={data?.getCityByName}
                isChecked={isChecked} setCheck={setCheck}/>
        </Grid>
    </Grid>
}


