import React, { useEffect } from "react";
import Aussie from "../CaseStudy/aussie/Aussie";
import Browse from "../CaseStudy/browse/Browse";
import Ranch from "../CaseStudy/Ranch/Ranch";
import Synopsis from "../CaseStudy/synopsis/Synopsis";
import TImeline from "../CaseStudy/timeline/TImeline";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

const Casestudy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Ranch />
      <Aussie />
      <Synopsis />
      <TImeline />
      <Browse />
      <Footer />
    </>
  );
};

export default Casestudy;
