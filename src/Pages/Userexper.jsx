import React, { useEffect } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Explore from "../Services/Explore/Explore";
import UserEx from "../userExpere/UserEx";
import UserUx from "../userExpere/UserUx";
import Animate from "./Animate";
import { useLocation } from "react-router-dom";

const Userexper = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <UserEx />
      {/* <UserUx /> */}
      <Animate />
      <Explore />
      <Footer />
    </>
  );
};

export default Userexper;
