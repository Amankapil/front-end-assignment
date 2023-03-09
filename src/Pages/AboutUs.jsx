import React from "react";
import AboutFooter from "../About/AboutFooter";
import Case from "../About/CaseStudy/Case";
import Circle from "../About/circle/Circle";
import Meet from "../About/meet/Meet";
import Vision from "../About/vision/Vision";
import Welcome from "../About/Welcom/Welcome";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Welcome />
        <Circle />
        <Vision />
        <Meet />
        <Case />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
