import React from "react";
import {Box, Card, Typography} from "@mui/material";

export default function Visibility({visibility}) {
    const currentVisibility = Math.round(visibility / 1000)

    return <>
        <Card sx={{
            width: '80%',
            padding: 2,
            borderRadius: '10%',
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 5
        }}>
            <Typography sx={{opacity: 0.7, fontSize: 14}}>Visibility</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    {visibility
                        ?
                        <Box sx={{fontSize: 35, lineHeight: 1,}} display={'flex'}>
                            {currentVisibility}
                            <Typography sx={{alignSelf: 'end'}}>km/h</Typography>
                        </Box>
                        : <Box>Нет информации</Box>
                    }

                </Box>
            </Box>
            <Typography sx={{fontWeight: 400}}>{
                visibility
                    ? currentVisibility <= 1 ? 'Light fog'
                        : currentVisibility <= 2 ? 'Thin fog'
                            : currentVisibility <= 4 ? 'Haze'
                                : currentVisibility <= 10 ? 'Clear'
                                    : 'Very clear'
                    : ''
            }</Typography>
        </Card>
    </>
}