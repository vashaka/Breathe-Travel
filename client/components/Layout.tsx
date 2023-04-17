import { useContext, useState } from "react";
import React from "react";
import Chat from "./Chat";
import Header from "./Header";
import { UserContext } from "../context/UserContext";
import { SiMessenger } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const { user }: any = useContext(UserContext);
  const router = useRouter();

  return (
    <div className="absolute smd:relative ml-0 mr-0 left-0 px-8 smd:px-0">
      <Header />
      <main className="z-10 smd:px-8 md:px-28 mt-28">{children}</main>
      {user && <Chat />}
      {!user && (
        <Link
          href={"/login"}
          className="cursor-default z-50 fixed right-0 top-0 bottom-0"
        >
          <div
            className="z-20 absolute bottom-10 right-10 rounded-full h-14 w-14 bg-white flex justify-center items-center"
            style={{
              boxShadow: "0 20px 25px -5px #7a7acd, 0 8px 10px -6px #7a7acd",
            }}
          >
            <SiMessenger
              // onClick={() => setOpen(!open)}
              style={{ fontSize: "35px" }}
              className=""
            />
            <div className="bg-red-500 w-4 h-4 rounded-full absolute top-0 right-0"></div>
          </div>
        </Link>
      )}
      {/* {router.pathname !== "/cart" && "/profile" && ( */}
        <div className="flex justify-center">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2023 Breathe All rights reserved.
            </p>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Layout;
