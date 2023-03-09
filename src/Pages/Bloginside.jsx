import React, { useEffect } from "react";
import March from "../Bloginside/March";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import { useLocation } from "react-router-dom";
const Bloginside = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <March />
      <Footer />
    </>
  );
};

export default Bloginside;
