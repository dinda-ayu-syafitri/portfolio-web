import React from "react";
import { Navbar } from "../components/navbar/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-theme-dark-blue text-theme-off-white min-h-screen ">
      <Navbar />
      {children}
    </div>
  );
};
