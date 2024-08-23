import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const MapView = ({ locations }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAakM6A13Afvd1PUpnG15clYb36fASJdvw",
        libraries,
    });

    if (!isLoaded) return <div>Loading...</div>;

    const center = locations.length > 0 ? {
        lat: locations[0].latitude,
        lng: locations[0].longitude
    } : {
        lat: 40.7128, //default nyc
        lng: -74.0060 
    };

    return (
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerStyle={{ height: "100%", width: "100%" }}
        >
            {locations.map((loc) => (
                <Marker
                    key={loc.id}
                    position={{ lat: loc.latitude, lng: loc.longitude }}
                    label={loc.name}
                />
            ))}
        </GoogleMap>
    );
};

export default MapView;
