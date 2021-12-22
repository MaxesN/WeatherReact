import React from "react";
import {clouds, day, fog, night, rain, snow} from "../../icons/Image";
import {styled} from "@mui/material";

const Img = styled('img')({})

export default function WeatherIcon({currentWeather, time}) {
    const newTime = new Date(time * 1000).getHours()

    if (currentWeather !== undefined && newTime !== null) {
        if (currentWeather === 'Clear') {
            if (newTime > 18 || newTime < 5) {
                return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={night} alt="night"/>

            } else return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={day} alt="day"/>

        } else if (currentWeather === 'Rain') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={rain} alt="Rain"/>

        } else if (currentWeather === 'Clouds') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={clouds} alt="clouds"/>

        } else if (currentWeather === 'Snow') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={snow}/>
        } else if (currentWeather === 'Fog' || 'Mist') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={fog} />
        }
    }
    return <div>Что-то пошло не так</div>
}