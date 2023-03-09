// import "./all.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

const BlogFooter = () => {
  return (
    <>
      <div className="loves coloo mt-60 flex justify-center flex-col pb-16 items-center">
        <div className="w-full maxw">
          <Link to="/letstalk">
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

            <div className="visi mb-36 flex justify-center items-center">
              <h1 className=" talk font-thin ">Lets Talk</h1>
            </div>
          </Link>
          <div className="foot justify-center flex max-md:flex-col max-xl:flex-wrap max-md:justify-start max-md:items-center ">
            <div className="logo0 mr-11 max-md:mr-0 w-64 -ml-20 max-lg:ml-24">
              <Swiper
                spaceBetween={10}
                // centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                  delay: 1000,
                  // disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                className="mySwiper 0 max-lg:h-full max-lg:ml-20"
              >
                <SwiperSlide>
                  <img
                    className=" w-3/4"
                    src="/services/Frame 510.svg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="family text-2xl mt-7">near to Ideas</h1>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="inquiri max-md:my-5 mx-14">
              <Link to="/about">
                <p className="nums my-3 coloo">about</p>
              </Link>
              <Link to="/Services">
                <p className="mail nums my-3 coloo ">service</p>
              </Link>
            </div>
            <div className="inquiri max-md:my-5 mt-3 mr-12">
              <Link to="/work">
                <p className="nums coloo">work</p>
              </Link>
              <Link to="/career">
                <p className="tex nums my-3 coloo">career</p>
              </Link>
            </div>

            <div className="city max-md:my-5 mx4">
              <Link to="/blog">
                <p className="nums my-3 coloo">blog</p>
              </Link>
              <Link to="/letstalk">
                <p className="nums coloo">Lets talk</p>
              </Link>
            </div>
            <div className="city max-md:my-5 mt-2 mx-24">
              <p className="te nums">info@codelinear.com</p>
              <p className="nums">+ 1415 5235974</p>
            </div>
            <div className="city flex mx-3 max-md:my-5">
              <p className="nums mx-2">
                <LinkedInIcon />
              </p>
              <p className="nums mx-2">
                <FacebookIcon />
              </p>
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
    </>
  );
};

export default BlogFooter;
