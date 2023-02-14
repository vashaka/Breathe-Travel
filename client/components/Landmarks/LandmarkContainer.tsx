import React from "react";
import Link from "next/link";

const LandmarkContainer = ({ landmark }: any) => {
  return (
    <div
      className="mt-6 relative hover:cursor-pointer w-auto md:w-[300px] 

    "
    >
      <img
        src={landmark?.imageUrl}
        className="rounded-2xl object-cover aspect-square h-full w-full"
        alt="landmark-image"
        // height={200}
        // width={350}
      />
      <div className="flex items-center">
        <h4 className="mt-1">{landmark?.title}</h4>
        <h4 className="flex absolute right-0 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-[1px] mr-[2px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span className="">{landmark?.stars}</span>
        </h4>
      </div>
      <h4 className="text-gray-400 font-normal">
        Viewed {landmark?.viewers} times
      </h4>
      <h4 className="text-gray-400 font-normal">{landmark?.reviews} reviews</h4>
      <div className="flex relative">
        <h4>
          {landmark?.price}$ <span className="text-gray-600">to travel</span>
        </h4>
        <div className="flex absolute right-0 top-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn flex flex-1 mr-1">Details</button>
        <Link href={"/profile"}>
          <button className="btn flex flex-1 mr-1 bg-[#d30953]">
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandmarkContainer;
