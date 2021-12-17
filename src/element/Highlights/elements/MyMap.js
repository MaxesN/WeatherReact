import React, {useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function MyMap ({coords}) {
    const position = [coords?.lat, coords?.lon]
    if(position) {
        return <MapContainer style={{ height: '350px', width: '100wh', borderRadius: 5}} center={position}  zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    }

    return <MapContainer style={{ height: '350px', width: '100wh', borderRadius: 5}} center={[12,  -2]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
}
