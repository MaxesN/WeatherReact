import React from "react";
import {Avatar, Box} from "@mui/material";

export default function TitleHighlights({isChecked, setCheck}) {
    const changeTemp = () => {
        setCheck(!isChecked)
    }

    return <>
        <Box sx={{fontSize: 35, fontWeight: 'bold'}}>
            Week
        </Box>
        <Box sx={{display: 'flex'}}>
            <Box sx={{marginRight: 2}}>
                <Avatar
                    onClick={!isChecked ? changeTemp : null}
                    sx={{
                        background: isChecked ? 'black' : 'aqua',
                        cursor: !isChecked ? 'pointer' : 'auto',
                        color: isChecked ? 'aqua' : 'black'
                    }}>
                    ºC
                </Avatar>
            </Box>
            <Box>
                <Avatar
                    onClick={isChecked ? changeTemp : null}
                    sx={{
                        background: !isChecked ? 'black' : 'aqua',
                        cursor: isChecked ? 'pointer' : 'auto',
                        color: !isChecked ? 'aqua' : 'black'
                    }}>
                    ºF
                </Avatar>
            </Box>
        </Box>
    </>
}