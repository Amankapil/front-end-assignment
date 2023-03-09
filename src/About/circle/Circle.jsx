import React from "react";
import "./circle.scss";
import gsap, { TweenMax, Linear } from "gsap";

const Circle = () => {
  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 0.8, width: 100, height: 100 });
  // };

  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  // };
  return (
    <>
      <div
        // onMouseEnter={onEnter}
        // onMouseLeave={onLeave}
        className="circle  mt-64 flex justify-center h-full relative  items-center"
      >
        <div className="width w-full flex-col h-full items-center flex justify-center relative">
          <div className="main h-44  w-44 flex justify-center items-center">
            <span className="text-2xl">Codelinear</span>
            <img className="yello" src="/images/yello.svg" alt="" />
            <img className="passs absolute" src="/blog/Group 28.svg" alt="" />
          </div>
          <div className="hdi  absolute flex">
            <div className=" h-72 Design w-72  flex justify-center items-center    ">
              <span className="text-2xl rotate">Design </span>
            </div>
            <div className=" Develop absolute h-72 w-72 flex justify-center items-center">
              <span className="text-2xl rotate1">Develop</span>
            </div>
            <div className=" Market absolute h-72 w-72 flex justify-center items-center ">
              <span className="text-2xl rotate2">Market</span>
            </div>
          </div>
        </div>
      </div>
      <div className="produc mt-60 font-medium flex justify-center items-center text-3xl leading-10">
        <div className="width w-full flex-col h-full items-center flex justify-center max-xl:p-5">
          <p className="text-sm">
            We are a digital product development and UX design firm determined
            to make an impact through our clients. With the finest end-user
            experience as our primary objective we intergrate our tech expertise
            with a social conscience to build digital products.
          </p>
        </div>
      </div>
    </>
  );
};

export default Circle;
