import React from "react";
import Agency from "./Agency";
import Build from "./Build";
import Client from "./Client";
import Dream from "./Dream";
import Footer from "./Footer";
import Ideas from "./Ideas";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Build />
        <Agency />
        <Dream />
        <Client />
        <Ideas />
        <Footer />
      </div>
    </>
  );
};

export default Home;
