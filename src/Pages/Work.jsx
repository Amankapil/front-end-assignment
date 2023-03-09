import React, { useEffect } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../work/card/Card";
import Proud from "../work/proud/Proud";
import { useLocation } from "react-router-dom";

const Work = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Proud />
      <Card />
      {/* <div className="-mt-72"> */}
        <Footer />
      {/* </div> */}
    </>
  );
};

export default Work;
