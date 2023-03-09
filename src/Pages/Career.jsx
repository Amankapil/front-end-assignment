import React, { useEffect } from "react";

import CareerFooter from "../career/CareerFooter";
import Impact from "../career/impact/Impact";
import Life from "../career/life/Life";
import Swip from "../career/life/Swip";
import Why from "../career/why/Why";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

const Career = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Impact />
      <Swip />
      <Why />
      <Life />
      <div className="mt-20">{/* <Swip /> */}</div>
      <Footer />
    </>
  );
};

export default Career;
