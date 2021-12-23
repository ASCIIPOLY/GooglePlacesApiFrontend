import React from 'react'
import { PlacesContext } from "../context/PlacesContext";
import { useContext } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function MyComponent() {

    const {datas, longitudeCenter, latitudeCenter} = useContext(PlacesContext) ;

    const containerStyle = {
        width: '700px',
        height: '600px'
    };
      
    const center = {
        lat: parseFloat(latitudeCenter),
        lng: parseFloat(longitudeCenter),
    };

    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }
      
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
            {datas.map((data, index) => 
            <Marker 
            key={index} 
            position={{lat:data.geometry.location.lat, lng:data.geometry.location.lng}} 
            />) }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)