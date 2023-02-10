import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import MapComponent from "./../../components/MapComponent";

const singleLandmark = () => {
  const [landmark, setLandmark] = useState<any>([]);
  const [error, setError] = useState(false);

  const router = useRouter();
  const id = router.query.landmarkId;

  useEffect(() => {
    fetch("http://localhost:3001/landmarks/" + id)
      .then((response) => response.json())
      .then((data) => {
        setLandmark(data);
      })
      .catch(setError(true));
  }, [id]);
  console.log(landmark.x);

  return (
    <div className="md:mx-24">
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
      <p>{landmark.description}</p>
      {landmark.x && <MapComponent x={landmark.x} y={landmark.y} />}
    </div>
  );
};

export default singleLandmark;
