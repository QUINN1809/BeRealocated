import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from 'google-map-react';
import { GoogleMap, useJsApiLoader, Marker, mar } from '@react-google-maps/api';
import { Component } from "react";
import { geolocated } from "react-geolocated";

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  const defaultPoint = {
    lat:43.634657,
    lng: -79.522378
  };
  //var lat = geolocated;
  const points = [
    {name: "1", position: {lat: 43.634657, lng:-79.522378}},
    {name: "2", position: {lat: 43.642567, lng:-79.387054}},
    {name: "3", position: {lat: 43.725600, lng:-79.452700}},
    {name: "4", position: {lat: 43.754300, lng:-79.517300}},
    {name: "5", position: {lat: 43.592760, lng:-79.643437}},
  ]
  function SimpleMap(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyALF4Lazl_RdjGP5xn7t0CeHRru8vB2ml4"
    })
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
      map.setZoom(10)
      setMap(map)
    }, []);
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, []);

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultPoint}
          defaultZoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {points.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          label={name}>
        </Marker>))}


        
        </GoogleMap>
        
    ) : <></>
  }
export default SimpleMap;
