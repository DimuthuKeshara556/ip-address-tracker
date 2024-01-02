import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer,Marker} from 'react-leaflet'
import icon from "./icon"
const Map = ({coordinates}) => {
  let state = {
    keyMAP: Math.random(),
  };
  return (
    <MapContainer
    key={state.keyMAP}
     center={[coordinates.lat,coordinates.lng]}
     zoom={18} 
     scrollWheelZoom={true}
        className="h-3/5 w-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[coordinates.lat,coordinates.lng]}>
        </Marker>
      </MapContainer>
  )
}

export default Map