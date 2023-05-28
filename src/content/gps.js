import React from "react";
 
// Importing geolocated reducer function
import { useGeolocated } from "react-geolocated";
 
const GPS = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });

return !isGeolocationAvailable ? (
  <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
  <div>Geolocation is not enabled</div>
) : coords ? (<div><div id="lat">{coords.latitude}</div>
<div id="long">{coords.longitude}</div></div>): (<div></div>);
};
 
// Binding geolocated() reducer function to
// App component, while exporting it
export default GPS;