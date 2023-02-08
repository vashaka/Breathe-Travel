import React from "react";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="absolute smd:relative ml-0 mr-0 left-0">
      <Header />
      <main className="smd:px-8 md:px-28">{children}</main>
    </div>
  );
};

export default Layout;
