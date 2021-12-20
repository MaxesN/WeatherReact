import React from "react";
import {Box, Card, Typography} from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import TemperatureFunc from "../../../temperatureFunc/temperatureFunc";

export default function MinMaxTemp({temperature, isChecked}) {
    return <>
        <Card sx={{
            width: {xs: 200, lg: '80%'},
            padding: 2,
            borderRadius: '10%',
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 5
        }}>
            <Typography sx={{opacity: 0.7, fontSize: 14}}>Min & Max temperature</Typography>
            <Box display={'flex'}>
                <ThermostatIcon fontSize={'large'} color={'primary'}/>
                {temperature
                    ? <Typography sx={{alignSelf: 'center', fontSize: 25}}>{!isChecked ? temperature?.min.toFixed(1) : TemperatureFunc(temperature?.min)}{isChecked ? '°C' : '℉'}</Typography>
                    : <Box>Нет информации</Box>
                }
            </Box>
            <Box display={'flex'}>
                <ThermostatIcon fontSize={'large'} color={'error'}/>
                {temperature
                    ? <Typography sx={{alignSelf: 'center', fontSize: 25}}>{!isChecked ? temperature?.max.toFixed(1) : TemperatureFunc(temperature?.max)}{isChecked ? '°C' : '℉'}</Typography>
                    : <Box>Нет информации</Box>
                }
            </Box>
        </Card>
    </>
}