import React from "react";
import SidebarMenu from "./SideMenu";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SidebarMenu />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* <Navbar /> */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
