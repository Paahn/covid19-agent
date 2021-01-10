import { useMap } from "react-leaflet";

function FocusMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default FocusMap