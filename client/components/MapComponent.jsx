import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

const MapComponent = ({ x, y }) => {
  // const selectedDestination = useSelector((state) => state.selectedDestination);
  // const coordinates = useSelector((state) => state.coordinates);
  // const qutaisi = useSelector((state) => state.qutaisi); // Testing

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCzTm9ZhDTvk1dTqrtD1F2YYcWk9WbHQ7o",
  });

  if (!isLoaded) return <div>Loading...</div>;

  // we can use marker if we want it on map

  const zoomLevel = 10;

  console.log(x);
  return (
    <>
      {/* <div className="flex justify-center">
        <h1 className="absolute -bottom-[700px] opacity-0" name="Google-Maps">
          forSmoothScroll
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="mb-2">
          Selected Destination
          <span className="text-white bg-[#f51767] px-2 py-1">
            {selectedDestination}
          </span>
        </h1>
      </div> */}
      <div className="hidden lg:flex justify-center">
        <GoogleMap
          zoom={zoomLevel}
          center={{ lat: x, lng: y }}
          mapContainerClassName="map-container"
          className="w-[180%] h-[80vh]"
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
          className="w-[180%] h-[80vh]"
        >
          <Marker position={{ lat: x, lng: y }} />
        </GoogleMap>
      </div>
      <h1>Hello</h1>
    </>
  );
};

export default MapComponent;
