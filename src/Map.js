import React from 'react';
import './Map.css';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from './helper';
import FocusMap from './FocusMap';

function Map({ countries, caseType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap 
      center={center}
      zoom={zoom}
      >
        <FocusMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, caseType)}
      </LeafletMap>
    </div>
  );
}

export default Map
