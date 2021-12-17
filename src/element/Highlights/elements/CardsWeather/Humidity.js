import React from "react";
import {Box, Card, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

export default function Humidity({humidity}) {
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
            <Typography sx={{opacity: 0.7, fontSize: 14}}>Humidity</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                {humidity ? <> <Box>
                        <Box sx={{fontSize: 35, lineHeight: 1, placeSelf: 'center'}}
                             display={'flex'}>{humidity}<Typography>%</Typography></Box>
                    </Box>
                    <Box width={'50%'}
                         sx={{display: 'flex', justifyContent: 'end', marginTop: 1, position: 'relative'}}>
                        <LinearProgress value={humidity} sx={{
                            transform: 'rotate(-90deg)',
                            width: '60%',
                            left: 10,
                            height: 15,
                            borderRadius: 5
                        }} variant="determinate"/>
                    </Box>
                    </>
                : <Box>Нет информации</Box>
                }
            </Box>
            <Typography sx={{fontWeight: 400}}>{humidity ? 'Miserable' : '' }</Typography>
        </Card>
    </>
}