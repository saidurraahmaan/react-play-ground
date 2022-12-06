import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-defaultColor text-white container mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
