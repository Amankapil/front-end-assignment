import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MvpDev from "../productDev/MvpDev";
import Transformed from "../productDev/Transformed";
import Explore from "../Services/Explore/Explore";
import Animate from "./Animate";
import { useLocation } from "react-router-dom";

const ProductDeve = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Transformed />
      {/* <MvpDev /> */}
      <Animate />
      <Explore />
      <Footer />
    </>
  );
};

export default ProductDeve;
