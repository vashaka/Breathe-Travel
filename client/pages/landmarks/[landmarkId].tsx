import React, { useEffect, useState, useMemo, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import MapComponent from "./../../components/MapComponent";
import HotelContainer from "../../components/Hotels/HotelContainer";

const SingleLandmark = () => {
  const [hotelsInfo, setHotelsInfo] = useState<any[]>([]);
  const [landmark, setLandmark] = useState<any>([]);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const router = useRouter();
  const id = router.query.landmarkId;

  useMemo(() => {
    fetch("http://localhost:3001/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotelsInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/landmarks/" + id)
      .then((response) => response.json())
      .then((data) => {
        setLandmark(data);
      })
      .catch(setError(true));
  }, [id]);
  const seeMoreDesc = () => {};

  return (
    <div className="">
      <div className="lg:mx-48">
        <Head>
          <title>{landmark?.title}</title>
        </Head>
        <h2 className="font-semibold">{landmark.title}</h2>
        {/* <img src={landmark.imageUrl} /> */}
        <div className="image-grid">
          <img
            className="image-grid-col-2 image-grid-row-2 xs:rounded-3xl md:rounded-sm md:rounded-l-3xl w-[100px]"
            // style={{ borderRadius: "20px 0px 0px 20px" }}
            src={landmark?.imageUrl}
            alt={landmark?.title}
          />
          <img
            src={landmark?.image1}
            className="xs:rounded-tl-3xl md:rounded-sm"
            alt={landmark?.title}
          />
          <img
            src={landmark?.image2}
            // style={{ borderRadius: "0px 20px 0px 0px" }}
            className="rounded-tr-3xl"
            alt={landmark?.title}
          />
          <img
            src={landmark?.image3}
            alt={landmark?.title}
            className="xs:rounded-bl-3xl md:rounded-sm"
          />
          <img
            src={landmark?.image4}
            alt={landmark?.title}
            className="rounded-br-3xl"
            // style={{ borderRadius: "0px 0px 20px 0px" }}
          />
        </div>
        <h1 className="text-center">About {landmark.title}</h1>
        <div
          className="grid grid-cols-[2fr,1fr] m-6"
          // style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {!clicked ? (
            <p className="text-sm max-w-xl">
              {landmark?.description?.slice(0, 130)}...{" "}
              <span
                onClick={() => setClicked(true)}
                className="text-black font-bold cursor-pointer"
              >
                see more
              </span>
            </p>
          ) : (
            <p className="text-sm max-w-xl">
              {landmark?.description}...{" "}
              <span
                onClick={() => setClicked(false)}
                className="text-black font-bold cursor-pointer"
              >
                see less
              </span>
            </p>
          )}
          <div className="bg-[#E4F4FF] w-full h-full rounded-xl border border-2-[rgb(42,42,42)]">
            <p className="text-center">{landmark.title}</p>
          </div>
        </div>
        <div className="flex justify-center mb-1">
          <h1 className="text-xl text-[#f51767] mt-1">check</h1>
          <h1 className="text-white text-xs">h</h1>
          <h1 className="text-white bg-[#f51767] px-2 py-1 rounded-sm">
            {landmark.title}
          </h1>
          <h1 className="text-white text-xs">h</h1>
          <h1 className="text-xl text-[#f51767] mt-1">on the map</h1>
        </div>
      </div>
      {landmark.x && <MapComponent x={landmark.x} y={landmark.y} />}
      {/* {hotelsInfo && (
        <div className="maylike-products-wrapper overflow-hidden">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {hotelsInfo.map((hotel) => (
                <HotelContainer key={hotel._id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SingleLandmark;
