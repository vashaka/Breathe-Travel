import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

const MapComponent = ({ x, y }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCzTm9ZhDTvk1dTqrtD1F2YYcWk9WbHQ7o",
  });

  if (!isLoaded) return <div>Loading...</div>;

  const zoomLevel = 8;

  console.log(x);
  return (
    <>
      <div className="hidden lg:flex justify-center">
        <GoogleMap
          zoom={zoomLevel}
          center={{ lat: x, lng: y }}
          mapContainerClassName="map-container"
        >
          <Marker position={{ lat: x, lng: y }} />
        </GoogleMap>
      </div>

      {/* for small screens */}
      <div className="flex lg:hidden justify-center">
        <GoogleMap
          zoom={zoomLevel}
          center={{ lat: x, lng: y }}
          mapContainerClassName="map-container-for-small-screens"
        >
          <Marker position={{ lat: x, lng: y }} />
        </GoogleMap>
      </div>
    </>
  );
};

export default MapComponent;
