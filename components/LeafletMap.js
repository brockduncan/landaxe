import React, { useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function LeafletMap({style, properties}) {
  const position = [40.8068768, -82.0033809];
  return (
    <Map center={position} zoom={13} style={style}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Hey, this is Wooster</Popup>
      </Marker>
      {properties.map(property => {
        return (
          <Marker position={property} />
        )
      })}
    </Map>
  );
}
