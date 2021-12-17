import React from "react";
import {Box, Skeleton, Typography} from "@mui/material";
import TemperatureFunc from "../../temperatureFunc/temperatureFunc";


export default function Temperature({temp, loading, isCheck}) {
    const fahrenheit = Math.round(temp)
    const celsius = Math.round(TemperatureFunc(temp))
    if (fahrenheit) {
        if (isCheck) {
            return <Typography  sx={{fontSize: 60}} component={'h1'}>{celsius + '°C'}</Typography>
        } else {
            return <Typography sx={{fontSize: 60}} component={'h1'}>{fahrenheit + 'ºF'}</Typography>
        }
    }
    return <Box onClick={() => console.log(fahrenheit,celsius )}>Нет информации о погоде</Box>

}