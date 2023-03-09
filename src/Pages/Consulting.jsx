import React, { useEffect } from "react";
import Swip from "../career/life/Swip";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Capitalize from "../consulting/capitalize/Capitalize";
import Market from "../consulting/Market/Market";
import Explore from "../Services/Explore/Explore";
import Animate from "./Animate";
import { useLocation } from "react-router-dom";

const Consulting = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Capitalize />
      {/* <Market /> */}
      <Animate />
      <Explore />
      {/* <Footer /> */}
    </>
  );
};

export default Consulting;
