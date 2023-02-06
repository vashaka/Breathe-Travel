import React from "react";

const HotelContainer = () => {
  return (
    <div className="relative hover:cursor-pointer">
      <img
        src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720"
        className="rounded-xl h-[250px] md:w-[300px] w-full"
        alt="Hotel-image"
      />
      <div className="flex items-center">
        <h4 className="mt-2">Sidemen, Indonezia</h4>
        <h4 className="flex absolute right-0">
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
          <span className="">4.5</span>
        </h4>
      </div>
      <h4 className="text-gray-400 font-normal">Viewed 8,881 times</h4>
      <h4>
        405$ <span className="text-gray-600">night</span>
      </h4>
    </div>
  );
};

export default HotelContainer;
