import React, { useRef, useEffect } from "react";
import "./all.css";
import "./styles/Build.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import AnimatedCursor from "react-animated-cursor";
import { Link } from "react-router-dom";

const Build = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0D0D0D", scale: 1 });
  };

  return (
    <>
      <div className="buld">
        <div className="bgimg">
          <video
            autoPlay
            muted
            loop
            className="bgv  max-lg:ml-0"
            id="myVieo"
            src="/images/ball2.mp4"
            type="video/mp4"
          >
            {/* <source className="absolute bgv w-1/3" src="/images/ball.mp4" type="video/mp4"></source> */}
          </video>
        </div>
        {/* <AnimatedCursor /> */}
        {/* <img className="w-full o0" src="/images/0480.png" alt="" /> */}
        {/* <div className="bgimg  max-lg:ml-0 absolute " id="myVieo"></div> */}
        <div className=" bhai z-10  h-3/4 w-full justify-center top-16  -left-56 max-xl:left-0 items-center flex absolute">
          <div className="build_width mt-20  flex  flex-col max-md:ml-2">
            <div className="main-content text-white leading-tight text-5xl max-md:text-2xl font-light w-3/4 my-7   max-md:">
              {/* <h1 className="max-md:text-2xl">We Are Codelinear- </h1> */}
              {/* <br /> */}
              <h1 className="max-md:text-5xl max-sm:text-3xl max-md:-mt-10 max-xl:p-5 font-bold  prp ">
                Propelling The World, By Design
              </h1>
            </div>

            <div className="hii mt-5 max-lg:ml-0 max-xl:p-5">
              <button
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className="btn about px-7 py-1 flex justify-center max-md:text-1xl max-md:w-1/2 text-1xl text-cyan-50 max-md:mt-60 max-md:ml-20"
              >
                <Link to="/about">about Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
