/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Plan from "./Plan";

const PlanContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center z-10 mt-0">
      <div
        style={{
          whiteSpace: "nowrap",
        }}
        className="flex justify-center"
      >
        <h1 className="flex text-white bg-[#f51767] px-2 py-1 rounded-sm h-full">
          step 1 -
        </h1>
        <h1 className="text-white text-xs">h</h1>
        <h1 className="text-xl text-[#f51767] mt-1">Choose Your Plan</h1>
      </div>
      <p className="text-md">
        // Tap on your favourite and check Landmarks on the map
      </p>
      <div className="grid grid-rows-none md:grid-cols-2 py-4 gap-2 md:gap-4">
        <Plan PlanTitle="Standard" amountOfLandmarks="3" />

        <Plan PlanTitle="Premium" amountOfLandmarks="5" />

        <div className="w-full col-span-2 md:col-span-2 row-span-1 relative">
          <Plan PlanTitle="VIP" amountOfLandmarks="7" />
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
