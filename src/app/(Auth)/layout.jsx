import Footer from "@/components/Share/Footer";
import NavBar from "@/components/Share/NavBar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
