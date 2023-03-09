import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect } from "react";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Leading = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      containerClass: "half-image-container",
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

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
      {Widht > 1300 ? (
        <div className="vision w-full mb-52 mt-52 flex justify-center h-full relative  items-center">
          <div className="widthh max-md:flex-col max-md:p-8  w-full flex relative">
            <div className=" mt-24 -ml-9 max-xl:ml-0 flex w-full">
              <h1 className="text-6xl w-full mt-16 ml-5 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                Leading The Way From
              </h1>
              <Swiper
                spaceBetween={30}
                // centeredSlides={true}
                slidesPerView={1}
                direction={"vertical"}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                className="mySwi -ml-10 max-xl:ml-0   w-full h-40 "
              >
                <SwiperSlide className="-ml">
                  <h1 className="text-6xl  mt-16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Design To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-6xl  mt-16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Stretegy To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-5xl  mt-16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Development To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-6xl  mt-16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Marketing to Success
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="vision w-full mb-52 mt-52 flex justify-center h-full relative  items-center">
            <div className="widthh max-md:flex-col max-md:p-8  w-full flex relative">
              <div className=" mt-24 -ml-9 max-xl:ml-0 flex w-full">
                <h1 className="text-6xl w-1/2 max-sm:w-full mt-16 ml-5 max-xl:ml-5 max-lg:text-4xl font-extrabold text-white">
                  Leading The Way From Design TO Execution
                </h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Leading;
