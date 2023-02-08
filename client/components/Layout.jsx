import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="px-8 md:px-28">{children}</main>
    </div>
  );
};

export default Layout;
