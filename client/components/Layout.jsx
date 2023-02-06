import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="px-16">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
