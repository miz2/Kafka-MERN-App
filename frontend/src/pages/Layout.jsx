import React from "react";
import Navbar from "../components/Navbar";
import SidebarMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SidebarMenu />
        <main className="flex-1 bg-[#f9fafb] min-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
