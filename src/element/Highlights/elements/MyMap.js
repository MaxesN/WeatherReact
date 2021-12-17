import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function MyMap ({coords}) {
    if (coords?.lat) {
        return <MapContainer style={{ height: '350px', width: '100wh', borderRadius: 5}} center={[coords?.lat || 12, coords?.lon || -2]} zoom={10} scrollWheelZoom={true}>
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