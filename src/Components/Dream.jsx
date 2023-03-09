import React from "react";
import "./styles/dream.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import "./all.css";
import { Link } from "react-router-dom";
const Dream = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      // backgroundColor: "#ffcd05",
      // scale: 0.9,
      paddingLeft: 40,
      color: "white",
      textShadow: "0px 0px 20px white",
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      // backgroundColor: "#000",
      // scale: 1,
      textDecoration: "none",
      paddingLeft: 0,
      color: "white",

      marginTop: 33,
      // color: "#a0a0a0",
      fontWeight: 100,
      fontFamily: "graphik",
      width: "95%",
    });
  };
  return (
    <>
      <div className="dream mt-32 relative  text-white flex justify-center w-full h-fit pt-5 mb-32 ">
        <div className="width w-full ml-20 max-md:ml-0">
          <div className="content flex justify-evenly max-lg:flex-col max-md:justify-center max-md:items-center  ">
            <div className="our_serives w-full">
              <div className="he">
                <h4 className="text-white font-bold max-md:text-4xl max-md:mt-60  ">Our Services</h4>
              </div>
              <div className="pe text-gray-600 coloo  my-5 mt-8">
                <p>
                  We help our clients define and shape the future. Lead the new
                  
                </p>
              </div>
              <div className=" explorebutnn mt-5 max-lg:ml-0 ">
                <button className="btn  about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                  <Link to="/services">Explore more</Link>
                </button>
              </div>
            </div>
            {/* <div className="const"> */}
            <div className="experi w-full flex justify-center items-center max-md:justify-center max-md:items-center  ">
              <ul className="const w-1/2 flex justify-center items-center ml-80 max-md:justify- max-md:items-    font-thin flex-col max-lg:-ml-20 max-lg:mt-20 ">
                <li
                  // onMouseEnter={onEnter}
                  // onMouseLeave={onLeave}
                  className=" font-thin my-5  max-md:justify-center max-md:items-center "
                >
                  <Link to="/consulting">Consulting And Strategy</Link>
                </li>
                <li className=" my-5">
                  {" "}
                  <Link to="/userexper">User Experience </Link>
                </li>
                <li className="tex4xl my-5  ">
                  {" "}
                  <Link to="/product">Product Development</Link>
                </li>
                <li className="tt-4xl my-5">
                  <Link to="/digital">Digital Marketing</Link>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dream;
