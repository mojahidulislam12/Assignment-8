import Banner from "@/components/Share/Banner";
import BreakingNews from "@/components/Share/BreakingNews";
import NavBar from "@/components/Share/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      {children}
    </div>
  );
};

export default MainLayout;
