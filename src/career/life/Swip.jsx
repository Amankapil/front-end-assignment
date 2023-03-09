import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import i9 from "../Careerassets/image 14.png";
import i1 from "../Careerassets/image 15.png";
import i2 from "../Careerassets/image 16.png";
import i3 from "../Careerassets/image 18.png";
import { gsap, TweenMax, Power3 } from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./life.scss";
// import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

export default function Swip() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 15 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(".k", { x: "100%" }, { x: "-150%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 15 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(".kg", { x: "100%" }, { x: "-050%" });
  }, []);
  return (
    <>
      <div className="imgd overflow-hidden mt-16 flex">
        <img className=" k  w-2/3 rounded-2xl" src={i1} alt="" />
        <img className=" k  w-2/3 mx-28 max-lg:mx-10 rounded-2xl" src={i2} alt="" />

        <img className=" k w-2/3 mx-28 max-lg:mx-10 rounded-2xl" src={i3} alt="" />

        {/* <div className="k img1c1  "></div>
        <div className="k img2c2 mx-44 "></div>
        <div className="k img3c3"></div> */}
      </div>
      {/* </Swiper> */}
    </>
  );
}
