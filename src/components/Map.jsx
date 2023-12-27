import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../images/icon-location.svg"
import { MapContainer, TileLayer } from "react-leaflet";
const Map = (coordinates) => {
    const marker = new L.icon({iconUrl:markerIcon});
    let state ={
        keyMap:Math.random(),
    };
  return (
    <MapContainer 
    key={state.keyMap}
    center={[coordinates.lat,coordinates.lng]} className="w-full h-3/5 z-0">
      <TileLayer attribution="Google Maps" url=""></TileLayer>
    </MapContainer>
  )
}

export default Map