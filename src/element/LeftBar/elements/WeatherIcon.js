import React from "react";
import {clouds, day, fog, night, rain, snow} from "../../icons/Image";
import {styled} from "@mui/material";

const Img = styled('img')({})

export default function WeatherIcon({currentWeather, time}) {
    const newDate = new Date(time * 1000)
    const currentHour = newDate.getHours()

    if (currentWeather !== undefined && time !== null) {
        if (currentWeather === 'Clear') {
            if (currentHour > 18 || currentHour < 5) {
                return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={night} alt="night"/>

            } else return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={day} alt="day"/>

        } else if (currentWeather === 'Rain') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={rain} alt="Rain"/>

        } else if (currentWeather === 'Clouds') {
            {console.log(currentHour)}
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={clouds} alt="clouds"/>

        } else if (currentWeather === 'Snow') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={snow}/>
        } else if (currentWeather === 'Fog' || 'Mist') {
            return <Img sx={{width: {md: '70%', sm: '60%', xs: '70%'}}} src={fog} />
        }
    }
    return <div>Что-то пошло не так</div>
}