import "./all.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, NavLink } from "react-router-dom";

import React, { useRef, useState, useEffect } from "react";
import { gsap, TweenMax, Power3 } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import Codelinear from "./codelinear";

const Footer = () => {
  function handleClick(event) {
    event.preventDefault();
    window.location.href = "/about";
  }
  function handleClicks(event) {
    event.preventDefault();
    window.location.href = "/Services";
  }
  function handleClickw(event) {
    event.preventDefault();
    window.location.href = "/work";
  }
  function handleClickc(event) {
    event.preventDefault();
    window.location.href = "/career";
  }
  function handleClickb(event) {
    event.preventDefault();
    window.location.href = "/blog";
  }
  function handleClickl(event) {
    event.preventDefault();
    window.location.href = "/letstalk";
  }
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      // ease: Bounce,
    });
    tl.fromTo(".footeranimation", 1, { x: 0 }, { x: 0 });
    tl.fromTo(".footeranimation", 0.1, { x: 0 }, { x: -78 });
    tl.fromTo(".footeranimation", 1, { x: -78 }, { x: -78 });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      // ease: Bounce,
    });
    tl.fromTo(".lower-footer-container", 1, { width: 133 }, { width: 133 });
    tl.fromTo(".lower-footer-container", 0.1, { width: 133 }, { width: "auto" });
    tl.fromTo(".lower-footer-container", 1, { width: 250 }, { width: 250 });
  }, []);
  return (
    <>
      <div className="loves coloo mt-60 flex justify-center flex-col pb-2 items-center z-50">
        <div className="w-full maxw">
          <NavLink to="/letstalk">
            <div className="secret flex justify-center items-center mb-20">
              <h1 className="text-4xl secret max-md:text-3xl max-lg:p-5">
                Wanna Know A Secret ?
              </h1>
              <div className="arrow">
                <img
                  src="/images/arrow.svg"
                  alt=""
                  srcset=""
                  className="arrow"
                />
              </div>
            </div>

            <div className="visi mb-36  max-lg:text-4xl flex justify-center items-center w-[90%]">
              <h1 className=" talk  font-thin ">Lets Talk</h1>
            </div>
          </NavLink>
          <div className="foot justify-center flex max-sm:flex-col max-xl:flex-wrap max-md:justify-center max-md:items-center ">
            <div className="logo0 mr-11 max-md:mr-0 w-[26rem] -ml-20 max-xl:ml4 max-xl:p-0 flex flex-col  justify-center items-center">
              <div className="lower-footer-container w-[140px]">
                <div className="aligncenter footeranimationwidth w-80 h-20 z-50 b relative">
                  <div className="footer-bounce footeranimation absolute z-0   -mt20 ">
                    <Codelinear />
                  </div>
                </div>
              </div>
              <p className="copyright p-5 max-md:ml-12">
                © Codelinear 2023. All Rights Reserved.
              </p>
              {/* <div className="copyrig coloo text-sm mt-3 mb-10">
                @ Codelinear 2023. All right reserved.
              </div> */}
            </div>
            <div className="left2 flex max-sm:flex-col max-md:flex-wrap w-full">
              <div className="bottumlink flex justify-center items-center w-[99%] max-sm:flex-col">
                <div className="inquiri max-md:my-5 mx- max-xl:flex-">
                  <NavLink to="/about" onClick={handleClick}>
                    <p className="nums my-3 coloo">about</p>
                  </NavLink>
                  <NavLink to="/Services" onClick={handleClicks}>
                    <p className="mail nums my-3 coloo ">service</p>
                  </NavLink>
                </div>
                <div className="inquiri max-md:my-5 mx-12 mt-4 mr12 max-xl:flex- max-md:mx-14">
                  <NavLink to="/work" onClick={handleClickw}>
                    <p className="nums coloo">work</p>
                  </NavLink>
                  <NavLink to="/career" onClick={handleClickc}>
                    <p className="tex nums my-3 coloo">career</p>
                  </NavLink>
                </div>

                <div className="city mx-  max-md:my-5 mx max-xl:flex-">
                  <Link href="/blog" onClick={handleClickb}>
                    <p className="nums  w-full my-3 coloo">Ideas</p>
                  </Link>
                  <Link to="/letstalk" onClick={handleClickl}>
                    <p className="nums w-full coloo">Lets talk</p>
                  </Link>
                </div>
              </div>
              <div className="ji max-lg:-ml-0 flex justify-center items-center w-full max-sm:flex-col">
                <div className="city max-md:my-5 mt-2 mx-24">
                  <p className="te nums">info@codelinear.com</p>
                  <p className="nums">+ 1415 5235974</p>
                </div>
                <div className="city flex mx-3 max-lg:my-10 max-lg:flex-wrap">
                  <div className="flex">
                    <p className="nums mx-2">
                      <LinkedInIcon />
                    </p>
                    <p className="nums mx-2">
                      <FacebookIcon />
                    </p>
                  </div>
                  <div className="flex">
                    <p className="nums mx-2">
                      <InstagramIcon />
                    </p>
                    <p className="nums mx-2">
                      <TwitterIcon />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
