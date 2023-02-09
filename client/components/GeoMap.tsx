import React from "react";
// import { useSelector } from "react-redux";

import GEO_MAP from "../data/GEO_MAP.png";
import Image from "next/image";

const GeoMap = () => {
  // const ActivePlan = useSelector((state) => state.ActivePlan);

  return (
    <div className="">
      {/* Ignore This */}
      <h1 className="absolute bottom-24 opacity-0" name="Plans">
        textForSmoothScroll
      </h1>
      {/* ----------- */}
      {/* <h1 className="absolute text-[#f51767]">{ActivePlan}</h1> */}
      <Image
        priority
        src={GEO_MAP}
        alt="geo-map"
        // className="h-[400px] w-[400px]"
        className="mx-auto"
        width={800}
        // height={800}
      />
    </div>
  );
};

export default GeoMap;
