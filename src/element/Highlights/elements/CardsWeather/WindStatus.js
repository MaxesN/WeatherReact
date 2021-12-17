import React from "react";
import {Box, Card, Typography} from "@mui/material";

export default function WindStatus({speed}) {
    const NewSpeed = Math.round(speed * 3.25)
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
            <Typography sx={{opacity: 0.7, fontSize: 14}}>Wind Status</Typography>
            {speed
                ? <Box display={'flex'}>
                    <Typography sx={{fontSize: 35, lineHeight: 1}}>{NewSpeed}</Typography>
                    <Typography sx={{alignSelf: 'end'}}>km/h</Typography>
                </Box>
                : <Box>Нет информации</Box>
            }

            <Typography
                sx={{fontWeight: 400}}> {
                    speed ?  NewSpeed <= 2 ? 'Calm'
                        : NewSpeed <= 6 ? 'Light air'
                            : NewSpeed <= 12 ? 'Light breeze '
                                : NewSpeed <= 20 ? 'Gentle breeze '
                                    : NewSpeed <= 30 ? 'Moderate breeze '
                                        : NewSpeed <= 40 ? 'Fresh breeze '
                                            : NewSpeed <= 51 ? 'Strong breeze '
                                                : 'Moderate gale '
                        : ''

            } </Typography>
        </Card>
    </>
}