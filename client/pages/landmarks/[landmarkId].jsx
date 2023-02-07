import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const singleLandmark = () => {
  const [landmark, setLandmark] = useState([]);
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
  });
  return (
    <div>
      <Head>
        <title>{landmark?.title}</title>
      </Head>
      <h1>{landmark.title}</h1>
      {/* <img src={landmark.imageUrl} /> */}
      <div class="image-grid">
        <img
          class="image-grid-col-2 image-grid-row-2"
          style={{ borderRadius: "20px 0px 0px 20px" }}
          src={landmark?.imageUrl}
          alt={landmark?.title}
        />
        <img src={landmark?.image1} alt={landmark?.title} />
        <img
          src={landmark?.image2}
          style={{ borderRadius: "0px 20px 0px 0px" }}
          alt={landmark?.title}
        />
        <img src={landmark?.image3} alt={landmark?.title} />
        <img
          src={landmark?.image4}
          alt={landmark?.title}
          style={{ borderRadius: "0px 0px 20px 0px" }}
        />
      </div>
    </div>
  );
};

export default singleLandmark;
