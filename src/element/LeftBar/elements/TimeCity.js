import React from "react";
import {Box, Typography} from "@mui/material";

export default function TimeCity ({name, country, time}) {
    if (time) {
        const newDate = new Date(time * 1000)
        const currentDay = newDate.toLocaleDateString(country, {weekday: 'long'})
        const currentTime = newDate.toLocaleDateString(country, {hour: 'numeric', minute: 'numeric'})
        return <>
            <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>{name}, {country}</Typography>
            <Box display={'flex'}>
                <Typography>{currentDay}</Typography>,
                <Typography sx={{opacity: 0.4, fontSize: 14, alignSelf: 'center', marginLeft: 0.5}}> {currentTime}</Typography>
            </Box>
        </>
    }
    return <Box>Нет данных</Box>
}