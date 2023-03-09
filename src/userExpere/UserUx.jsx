import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

const UserUx = () => {
  return (
    <>
      <div className="vision w-full mt-52 flex justify-center h-full relative  items-center">
        <div className="widthh max-md:flex-col max-md:p-8  w-full flex relative">
          <div className="leftcontainer w-full">
            {/* <Swiper
              spaceBetween={30}
              // centeredSlides={true}
              slidesPerView={1}
              direction={"vertical"}
              mousewheel
              loop={true}
              // autoplay={{
              //   delay: 1500,
              //   // disableOnInteraction: false,
              // }}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Autoplay, FreeMode, Pagination, Navigation]}
              className="mySwiper h-80"
            > */}
            {/* <SwiperSlide> */}
            <div className="leftside w-3/4">
              <h1 className="text-7xl max-md:text-4xl family">Ux Audit</h1>
              <p className="coloo my-8">
                As technology is propelling the world into a new realm of
                disruptions, our strategic market research enables you to
                identify the viability of the product by directly taking
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide> */}
            <div className="leftside w-3/4">
              <h1 className="text-7xl max-md:text-4xl family">
                UI UX Research
              </h1>
              <p className="coloo my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide> */}
            <div className="leftside w-3/4">
              <h1 className="text-7xl max-md:text-4xl family">
                UI UX Consulting
              </h1>
              <p className="coloo my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide> */}
            <div className="leftside w-3/4 max-md:w-full">
              <h1 className="text-5xl max-md:text-3xl ">
                User Experience Design
              </h1>

              <p className="coloo my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide> */}
            <div className="leftside w-3/4">
              <h1 className="text-7xl  max-md:text-3xl">Digital Branding</h1>
              <p className="coloo my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
            </Swiper> */}
          </div>
          <div className="rightcontainer flex items-center justify-center w-3/4 max-lg:w-full">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              // slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 1500,
              }}
              modules={[Autoplay, FreeMode]}
              className="mySwiper h-80 w-2/3 flex justify-center items-center mt-28 max-md:w-full "
            >
              <SwiperSlide className="w-full">
                <li className="p-5">Ux Audit</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="p-5">UI UX Research</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="p-5">UI UX Consulting</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="p-5">User Experience Design</li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserUx;
