import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Contact from "../letstalk/contact/Contact";
import LetsFooter from "../letstalk/LetsFooter";
import Limit from "../letstalk/talk/Limit";

import { useLocation } from "react-router-dom";
const LetsTalk = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Limit />
      <Contact />
      <Footer />
    </>
  );
};

export default LetsTalk;
