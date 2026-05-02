import Banner from "@/components/Share/Banner";
import BreakingNews from "@/components/Share/BreakingNews";
import Footer from "@/components/Share/Footer";
import NavBar from "@/components/Share/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
