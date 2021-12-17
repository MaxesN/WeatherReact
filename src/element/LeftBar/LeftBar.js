import React from "react";
import {Autocomplete, Box, Button, Skeleton, styled, TextField} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import WeatherIcon from "./elements/WeatherIcon";
import Temperature from "./elements/Temperature";
import TimeCity from "./elements/TimeCity";
import DescriptionWeather from "./elements/DescriptionWeather";
import cities from 'cities.json'


const newCities = cities.filter(el => el.country === 'UA').map((el, index) => ({value: index, label: el.name}))


const HrLine = styled('hr')({
    opacity: 0.5
})


export default function LeftBar({changeCity, loading, isChecked, cityName, time, dataWeather}) {
    return (
        <Box>
            <Box sx={{display: "flex"}}>
                <Autocomplete
                    sx={{width: 350,}}
                    value={cityName}
                    onChange={(e, city) => changeCity(city?.label)}
                    options={newCities}
                    renderOption={(props, {value, label}) => (
                        <li {...props} key={value}>{label}</li>)} // prettier-ignore
                    renderInput={(params) => <TextField  {...params} label="Search City"/>}
                />
                <Button onClick={() => changeCity('Lviv')} sx={{marginLeft: 1, border: 1, borderColor: 'lightblue'}}><HomeIcon/></Button>
            </Box>
            <Box sx={loading ? {marginLeft: 3} : {marginLeft: 3, marginTop: 8}}>
                {loading
                    ? <Skeleton width={150} height={250} sx={{marginLeft: "auto", marginRight: '30%', top: 0}}/>
                    : <WeatherIcon currentWeather={dataWeather?.weather.summary.title} time={2}/>
                }
            </Box>
            <Box sx={loading ? {marginTop: 0} : {marginTop: 10}}>
                {loading
                    ? <Skeleton height={100} width={150} />
                    : <Temperature isCheck={isChecked} temp={dataWeather?.weather.temperature.actual}/>
                }
            </Box>
            <Box sx={ loading ? {marginTop: 0} : {marginTop: 1, marginBottom: 3}}>
                {loading
                    ? <Skeleton height={100} width={150} />
                    : <TimeCity time={time} country={dataWeather?.country} name={dataWeather?.name}/>
                }
            </Box>
            <HrLine/>
            <Box>
                {loading
                    ? <Skeleton height={100} width={'70%'} />
                    : <DescriptionWeather description={dataWeather?.weather.summary.description} clouds={dataWeather?.weather.clouds.all}/>
                }
            </Box>
        </Box>
    );
}