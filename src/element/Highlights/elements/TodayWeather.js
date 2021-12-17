import React from "react";
import {Box, Grid, Skeleton, Typography} from "@mui/material";
import WindStatus from "./CardsWeather/WindStatus";
import SunRice from "./CardsWeather/SunRice";
import Humidity from "./CardsWeather/Humidity";
import Visibility from "./CardsWeather/Visibility";
import MinMaxTemp from "./CardsWeather/MinMaxTemp";
import MyMap from "./MyMap";


export default function TodayWeather({dataWeather, isChecked, loading, coords}) {
    const cards = <>
        <Grid item xs={4}>
            <WindStatus speed={dataWeather?.weather?.wind.speed}/>
        </Grid>
        <Grid item xs={4}>
            <SunRice/>
        </Grid>
        <Grid item xs={4}>
            <Humidity humidity={dataWeather?.weather.clouds.humidity}/>
        </Grid>
        <Grid item xs={4}>
            <Visibility visibility={dataWeather?.weather.clouds.visibility}/>
        </Grid>
        <Grid item xs={4}>
            <MinMaxTemp isChecked={isChecked} temperature={dataWeather?.weather.temperature}/>
        </Grid></>
    const cardsWithSkeleton = <>
        <Grid item xs={4}>
           <Skeleton width={'80%'} height={200} />
        </Grid>
        <Grid item xs={4}>
            <Skeleton width={'80%'} height={200} />
        </Grid>
        <Grid item xs={4}>
            <Skeleton width={'80%'} height={200} />
        </Grid>
        <Grid item xs={4}>
            <Skeleton sx={{marginTop: '-40%'}} width={'80%'} height={200} />
        </Grid>
        <Grid item xs={4}>
            <Skeleton sx={{marginTop: '-40%'}} width={'80%'} height={200} />
        </Grid></>

    return <Box sx={{marginTop: 10}}>
        {loading
            ? <Skeleton width={300} height={40}/>
            : <Typography sx={{fontSize: 20, fontWeight: 'bold', marginBottom: 4}}>Today`s Highlights</Typography>
        }
        <Box sx={{display: 'flex'}}>
            <Grid width={'60%'} container rowSpacing={3}>
                {loading
                    ? cardsWithSkeleton
                    : cards
                }

            </Grid>
            <Box sx={ loading ? {width: '40%', marginTop: '-8%'} : {width: '40%'}}>
                {loading
                    ? <Skeleton width={'100%'} height={600} />
                    : <MyMap coords={coords} />
                }

            </Box>
        </Box>
    </Box>
}