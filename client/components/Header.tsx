import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const url = router.pathname;

  return (
    <div
      className="z-20"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        margin: "auto",
        width: "100%",
        borderBottom: "0.5px solid hsl(0, 0%, 88%)",
      }}
    >
      <div className="px-8 md:px-28 py-6 flex justify-between items-center bg-white opacity-95">
        <div className="flex justify-center">
          <Link href={"/"} className="smd:flex hidden items-center gap-1">
            <p className="font-bold text-2xl text-red-700">Breathe.</p>
          </Link>
        </div>
        <div className="rounded-full flex border shadow-md relative shadow-gray-300 px-8 py-2 gap-4 border-gray-300 hover:shadow-lg duration-500 justify-center">
          {url === "/" ? (
            <Link
              href="/"
              className="text-[15px] text-gray-400 cursor-pointer font-semibold"
            >
              Home
            </Link>
          ) : (
            <Link href="/" className="text-[15px] cursor-pointer font-semibold">
              Home
            </Link>
          )}
          <div className="border-l border-gray-300"></div>
          {/* Landmarks */}

          {url === "/landmarks" || url.includes("landmarks") ? (
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
          {/* Hotels */}

          {url === "/hotels" || url.includes("hotels") ? (
            <Link
              href="/hotels"
              className="text-[15px] text-gray-400 cursor-pointer font-semibold"
            >
              Hotels
            </Link>
          ) : (
            <Link
              href="/hotels"
              className="text-[15px] cursor-pointer font-semibold"
            >
              Hotels
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
        <Link
          href="/cart"
          className="font-semisemibold flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md"
        >
          {url === "/cart" ? (
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          ) : (
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          )}

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
        </Link>
      </div>
    </div>
  );
};

export default Header;
