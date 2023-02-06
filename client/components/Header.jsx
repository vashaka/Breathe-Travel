import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const url = router.pathname;

  return (
    <div className="w-full py-8 flex justify-between items-center">
      <div className="flex justify-center">
        <Link href={"/"} className="flex items-center gap-1">
          <p className="font-semibold text-xl">Breathe.</p>
        </Link>
      </div>
      <div className="rounded-full flex border shadow-md relative shadow-gray-300 px-8 py-2 gap-4 border-gray-300 hover:shadow-lg duration-500 justify-center">
        {url === "/" || url.includes("hotels") ? (
          <Link
            href="/"
            className="text-[15px] text-gray-400 cursor-pointer font-semibold"
          >
            Hotels
          </Link>
        ) : (
          <Link href="/" className="text-[15px] cursor-pointer font-semibold">
            Hotels
          </Link>
        )}
        <div className="border-l border-gray-300"></div>
        {/* Landmarks */}
        {url === "/landmarks" ? (
          <Link
            href="/landmarks"
            className="text-[15px] text-gray-400 cursor-pointer font-semibold"
          >
            Landmarks
          </Link>
        ) : (
          <Link
            href="/landmarks"
            className="text-[15px] cursor-pointer font-semibold"
          >
            Landmarks
          </Link>
        )}
        <div className="border-l border-gray-300"></div>
        {/* cars */}
        {url === "/cars" ? (
          <Link
            href="/cars"
            className="text-[15px] cursor-pointer text-gray-400 font-semibold"
          >
            cars
            {/* <span className="text-white">iw</span> */}
          </Link>
        ) : (
          <Link
            href="/cars"
            className="text-[15px] cursor-pointer font-semibold"
          >
            cars
            {/* <span className="text-white">iw</span> */}
          </Link>
        )}
        {/* <button className="bg-red-500 text-white p-2 top-[15%] absolute right-1 rounded-full">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button> */}
      </div>
      <div className="font-semisemibold flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
