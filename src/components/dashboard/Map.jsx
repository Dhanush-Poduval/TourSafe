'use client'
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer , Polygon ,Popup} from 'react-leaflet'
export default function Map() {
    const center=[27.3310, 88.6132];
    const [point,setPoint]=useState([])
    const [geoLocation,setgeoLocation]=useState({})
    useEffect(() => {
  async function safeZone() {
    try {
      const res = await fetch('http://127.0.0.1:8000/create_safe_zones', {
        method: 'POST'
      });
      const data = await res.json();

      const formattedZones = data.zones.map(zone => ({
        id: zone.id,
        coords: [
          [zone.lat1, zone.lng1],
          [zone.lat2, zone.lng2],
          [zone.lat3, zone.lng3],
          [zone.lat4, zone.lng4],
          
        ]
      }));

      setPoint(formattedZones);
    } catch (error) {
      console.log("Error", error);
    }
  }

  safeZone();
}, []);


useEffect(() => {
  if ("geolocation" in navigator) {
    const watchId=navigator.geolocation.watchPosition(
      (position) => {
        setgeoLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }
  
}, []);

/* const safezones = [
  {
    id: 1,
    name: "Safezone 1 - Gangtok, Sikkim",
    coords: [
      [27.3389, 88.6139],
      [27.3400, 88.6200],
      [27.3450, 88.6180],
      [27.3420, 88.6120],
    ],
  },
  {
    id: 2,
    name: "Safezone 2 - Guwahati, Assam",
    coords: [
      [26.1445, 91.7362],
      [26.1460, 91.7420],
      [26.1500, 91.7400],
      [26.1480, 91.7340],
    ],
  },
  {
    id: 3,
    name: "Safezone 3 - Shillong, Meghalaya",
    coords: [
      [25.5780, 91.8800],
      [25.5800, 91.8860],
      [25.5840, 91.8840],
      [25.5820, 91.8780],
    ],
  },
  {
    id: 4,
    name: "Safezone 4 - Dibrugarh, Assam",
    coords: [
      [27.4720, 94.9100],
      [27.4740, 94.9160],
      [27.4780, 94.9140],
      [27.4760, 94.9080],
    ],
  },
  {
    id: 5,
    name: "Safezone 5 - Itanagar, Arunachal Pradesh",
    coords: [
      [27.0840, 93.6050],
      [27.0860, 93.6100],
      [27.0900, 93.6080],
      [27.0880, 93.6030],
    ],
  },
];
*/
    const customIcon=new Icon({
        iconUrl:"map-pin.png",
        iconSize:[38,38] //size of icon
    })

  return (
    <MapContainer center={center} zoom={13}style={{ height: "100%", width: "100%" }}>
  <TileLayer
    attribution=''
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {point.map((zone, zoneIdx) => (
  <React.Fragment key={`zone-${zone.id}-${zoneIdx}`}>
    <Polygon
      key={`polygon-${zone.id}`}  
      positions={zone.coords}
      pathOptions={{ color: "green", fillOpacity: 0.2 }}
    />
    {zone.coords.map((coord, idx) => (
      <Marker
        key={`marker-${zone.id}-${idx}`}  
        position={coord}
        icon={customIcon}
      ><Popup>SafeZone{zone.id}</Popup></Marker>
    ))}
  </React.Fragment>
))}
{geoLocation && geoLocation.lat && geoLocation.lon && (
        <Marker position={[geoLocation.lat, geoLocation.lon]} icon={customIcon}><Popup>Your current Location</Popup></Marker>
      )}

</MapContainer>
  )
}
