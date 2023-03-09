import React from "react";
import Agency from "./Agency";
import Build from "./Build";
import Client from "./Client";
import Dream from "./Dream";
import Dummy from "./Dummy";
import Footer from "./Footer";
import Footerr from "./footer/footer";
import Ideas from "./Ideas";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Build />
        {/* <Agency /> */}
        <Dummy />
        <Dream />
        <Client />
        <Ideas />
        <Footer />
        {/* <Footerr /> */}
      </div>
    </>
  );
};

export default Home;
