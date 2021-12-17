import React from "react";
import {Box, Button, Card, CardActions, CardContent, Skeleton, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {rain} from "../../icons/Image";

const cards = [
    {title: 'Tue', weather: 'Clear', temperature: '8', id: 1},
    {title: 'Wed', weather: 'Rain', temperature: '3', id: 2},
    {title: 'Thu', weather: 'Snow', temperature: '-7', id: 3},
    {title: 'Fri', weather: 'Rain', temperature: '-3', id: 4},
    {title: 'Sat', weather: 'Clouds', temperature: '2', id: 5},
    {title: 'Sun', weather: 'Clear', temperature: '5', id: 6},
]

const Img = styled('img')({
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto'

})

export default function Cards({loading, dataWeather}) {

    const items = cards.map(item =>
        <Card key={item.id} sx={{maxWidth: '10%', borderRadius: '10%', boxShadow: 4}}>
            <CardContent sx={{textAlign: 'center'}}>
                <Typography sx={{fontSize: 16, fontWeight: 'bold', color: 'black'}} color="text.secondary" gutterBottom>
                    {item.title}
                </Typography>
                <Box>
                    <Img src={rain}/>
                </Box>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Typography sx={{textAlign: 'center'}}>{item.temperature} ºC </Typography>
            </CardActions>
        </Card>)
    const skeletonCars = cards.map(item => <Skeleton key={item.id} width={'10%'} height={190}/>)


    if (loading) {
        return skeletonCars
    } else {
        if (dataWeather) {
            return items
        } else return <Box>Нет информации</Box>
    }
}

