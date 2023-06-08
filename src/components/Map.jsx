import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Map() {
  const MapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 3.2232411,
    lng: -76.5078124
  }

  const company = [
    {lat: 6.2441988, lng: -75.6512524},
    {lat: 4.6482837, lng: -74.247895},
    {lat: 5.5800838, lng: -73.3419295},
    {lat: 1.2135252, lng: -77.3122422},
    {lat: 7.2441988, lng: -76.6512524}
  ]
  return (
    <>
      <h1>Google Maps</h1>
      <LoadScript googleMapsApiKey='AIzaSyAnf7jaQLo85NSrN6GmPkO3UKhjSnbQ-ow'>
        <GoogleMap
          mapContainerStyle={MapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {company.map((data, index) => (
            <Marker key={index} position={data}/>
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Map;