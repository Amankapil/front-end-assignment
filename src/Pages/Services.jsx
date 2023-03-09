import React, { useEffect } from "react";
import CareerFooter from "../career/CareerFooter";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Doit from "../Services/do/Doit";
import Engagement from "../Services/Engagement/Engagement";
import Explore from "../Services/Explore/Explore";
import Leading from "../Services/leading/Leading";
import { useLocation } from "react-router-dom";


const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Leading />
      <Doit />
      <Explore />
      <Engagement />
      <Footer />
    </>
  );
};

export default Services;
