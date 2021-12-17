import React from "react";
import {Box, Typography} from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import AdjustIcon from '@mui/icons-material/Adjust';

export default function DescriptionWeather ({clouds, description}) {
    if (clouds) {
        return <>
            <Box sx={{marginTop:3}} display={'flex'}><CloudIcon sx={{marginRight: 2}} color={'action'}/><Typography>Clouds - {clouds}%</Typography></Box>
            <Box sx={{marginTop:1.5}} display={'flex'}><AdjustIcon sx={{marginRight: 2}} color={'primary'}/><Typography>{description}</Typography></Box>
        </>
    }
    return <Box>Нет данных</Box>
}