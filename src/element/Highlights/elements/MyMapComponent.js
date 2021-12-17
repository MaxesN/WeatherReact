import React from "react";
import GoogleMap from "react-google-maps/lib/components/GoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";

export const MyMapComponent = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 42, lng: 42}}
    />
))

