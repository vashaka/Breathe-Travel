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
    <div className="md:px-12">
      <Head>
        <title>{landmark?.title}</title>
      </Head>
      <h2 className="font-semibold">{landmark.title}</h2>
      {/* <img src={landmark.imageUrl} /> */}

      <div class="image-grid">
        <img
          class="image-grid-col-2 image-grid-row-2 xs:rounded-3xl md:rounded-sm md:rounded-l-3xl w-[100px]"
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
    </div>
  );
};

export default singleLandmark;
