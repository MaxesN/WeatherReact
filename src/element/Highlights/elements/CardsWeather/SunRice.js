import React from "react";
import {Box, Card, Typography} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function SunRice(props) {
    return <>
        <Card sx={{width: {xs: 200, lg: '80%'}, padding: 2, borderRadius: '10%', height: 150, boxShadow: 5}}>
            <Typography sx={{opacity: 0.7, fontSize: 14, marginBottom: 2}}>Sunrice & Sunset</Typography>
            <Box display={'flex'} sx={{marginBottom: 1}}><ArrowCircleUpIcon fontSize={'large'}/><Typography
                sx={{alignSelf: 'center', marginLeft: 1.5}}>07:02</Typography> </Box>
            <Box display={'flex'}><ArrowCircleDownIcon fontSize={'large'}/> <Typography
                sx={{alignSelf: 'center', marginLeft: 1.5}}>16:20</Typography></Box>
        </Card>
    </>
}