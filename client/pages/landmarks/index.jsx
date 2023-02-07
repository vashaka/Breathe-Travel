import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import LandmarkContainer from "./../../components/Landmarks/LandmarkContainer";

const LandmarksPage = () => {
  const [landmarksInfo, setLandmarksInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/landmarks")
      .then((response) => response.json())
      .then((data) => {
        setLandmarksInfo(data);
        // console.log(landmarksInfo);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Head>
        <title>landmarks</title>
      </Head>
      <div className=" grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] mx-auto">
        {landmarksInfo.length > 0 &&
          landmarksInfo.map((landmark) => {
            return (
              <Link key={landmark._id} href={`/landmarks/${landmark._id}`}>
                <LandmarkContainer landmark={landmark} />
              </Link>
            );
          })}
      </div>
      {landmarksInfo.length === 0 && (
        <div className="">
          <h1 className="text-center">No Landmarks found, Refresh the site!</h1>
        </div>
      )}
    </div>
  );
};

export default LandmarksPage;
