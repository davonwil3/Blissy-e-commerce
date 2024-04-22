import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import LocationPin from './location';

function MapRender() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, California.',
    lat: 40.724030,
    lng: -73.352480
  };

  const Mapstyle = (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
          defaultCenter={location}
          defaultZoom={16}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );

  return (
    <div className="flex-container map-content">
      {Mapstyle}
    </div>
  );
}

export default MapRender;
