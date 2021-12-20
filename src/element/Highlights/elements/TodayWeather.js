import React from "react";
import {Box, Grid, Skeleton, Typography} from "@mui/material";
import WindStatus from "./CardsWeather/WindStatus";
import SunRice from "./CardsWeather/SunRice";
import Humidity from "./CardsWeather/Humidity";
import Visibility from "./CardsWeather/Visibility";
import MinMaxTemp from "./CardsWeather/MinMaxTemp";
import MyMap from "./MyMap";


export default function TodayWeather({dataWeather, isChecked, loading, coords}) {
    const MySkeleton = () => (
        <Skeleton sx={{
            width: {xs: 200, lg: '80%'},
            padding: 2,
            borderRadius: '10%',
            height: 250,
        }}/>
    )

    const MyGrid = ({children}) => (
        <Grid item xs={12} sm={6} md={4}>
            {children}
        </Grid>
    )


    const cards = <>
        <MyGrid>
            <WindStatus speed={dataWeather?.weather?.wind.speed}/>
        </MyGrid>
        <MyGrid>
            <SunRice/>
        </MyGrid>
        <MyGrid>
            <Humidity humidity={dataWeather?.weather.clouds.humidity}/>
        </MyGrid>
        <MyGrid>
            <Visibility visibility={dataWeather?.weather.clouds.visibility}/>
        </MyGrid>
        <MyGrid>
            <MinMaxTemp isChecked={isChecked} temperature={dataWeather?.weather.temperature}/>
        </MyGrid></>
    const cardsWithSkeleton = <>
        <MyGrid>
            <MySkeleton/>
        </MyGrid>
        <MyGrid>
            <MySkeleton/>
        </MyGrid>
        <MyGrid>
            <MySkeleton/>
        </MyGrid>
        <MyGrid>
            <MySkeleton/>
        </MyGrid>
        <MyGrid>
            <MySkeleton/>
        </MyGrid></>

    return <Box sx={{marginTop: 10}}>
        {loading
            ? <Skeleton width={300} height={40}/>
            : <Typography sx={{fontSize: 20, fontWeight: 'bold', marginBottom: 4}}>Today`s Highlights</Typography>
        }
        <Box sx={{display: {lg: 'flex', xs: 'block'}}}>
            <Grid sx={{
                width: {xs: '100%', lg: '60%'},
                justifyContent: {sm: 'space-between', xs: 'center'},
                flexWrap: {xs: 'wrap'}
            }} container rowSpacing={3}>
                {loading
                    ? cardsWithSkeleton
                    : cards
                }

            </Grid>
            <Box sx={loading ? {width: '40%', marginTop: '-8%'} : {
                width: {lg: '40%', xs: '100%'},
                marginTop: {lg: 0, xs: 4}
            }}>
                {loading
                    ? <Skeleton sx={{width: {xs: '250%', lg: '100%'}}} height={600}/>
                    : <MyMap coords={coords}/>
                }

            </Box>
        </Box>
    </Box>
}