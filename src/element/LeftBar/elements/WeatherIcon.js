import React from "react";
import {styled} from "@mui/material";
import {clouds, day, fog, night, rain, snow} from "../../icons/Image";

const Img = styled('img')({
    width: '70%'
})

export default function WeatherIcon({currentWeather, time}) {
    if (currentWeather !== undefined && time !== null) {
        if (currentWeather === 'Clear') {
            if (time > 18 || time < 5) {
                return <Img src={night} alt="night"/>

            } else return <Img src={day} alt="day"/>

        } else if (currentWeather === 'Rain') {
            return <Img src={rain} alt="Rain"/>

        } else if (currentWeather === 'Clouds') {
            return <Img src={clouds} alt="clouds"/>

        } else if (currentWeather === 'Snow') {
            return <Img src={snow}/>
        } else if (currentWeather === 'Fog' || 'Mist') {
            return <Img src={fog} />
        }
    }
    return <div>Что-то пошло не так</div>
}