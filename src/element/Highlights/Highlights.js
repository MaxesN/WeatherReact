import React from "react";
import {Box, Skeleton} from "@mui/material";
import TitleHighlights from "./elements/TitleHighlights";
import Cards from "./elements/Cards";
import TodayWeather from "./elements/TodayWeather";

export default function Highlights({dataWeather, setCheck, isChecked, loading, coords}) {
    return <Box sx={{padding: 5}}>
        <Box  display={'flex'} sx={ loading ?  {justifyContent: 'space-between', alignItems: 'center', marginTop: -3.5} : {justifyContent: 'space-between'}}>
            {loading
                ? <><Skeleton width={100} height={50} /> <Skeleton width={100} height={100} /></>
                : <TitleHighlights isChecked={isChecked} setCheck={setCheck} />

            }
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 10, flexWrap: 'wrap'}}
        ><Cards dataWeather={dataWeather} loading={loading} /></Box>
        <Box><TodayWeather coords={coords} loading={loading} dataWeather={dataWeather} isChecked={isChecked} /></Box>
    </Box>
}