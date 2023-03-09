import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect } from "react";

import "./styles/clients.scss";

import imgqq from "../blog/blogimages/Frame 44.png";
import imgq1 from "../blog/blogimages/Frame 472.png";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Ideas = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0D0D0D", scale: 1 });
  };
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
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     defaults: { duration: 10 },
  //     repeat: -1,
  //     yoyo: true,
  //   });
  //   tl.fromTo(".casee", { x: "100%" }, { x: "-150%" });
  // }, []);
  return (
    <>
      {Widht >= 920 ? (
        <>
          <div className="loves mt-32 flex justify-center flex-col items-center">
            <div className="max--9xl homeidea ">
              <Swiper
                slidesPerView={3}
                slidesPerGroupSkip={1}
                spaceBetween={60}
                loop={true}
                // breakpoints
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[27rem] mt-20"
              >
                <SwiperSlide>
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <div className="flex">
                <div className="casee">
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casee">
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casee">
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casee">
                  <div className="cardh  cass  mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img src="/blog/Frame 43.png" alt="" />
                    </div>
                    <div className="head mt-5">
                      <h2 className="text-3xl text-center text-stone-400">
                        Empathy in UX
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                        Union flatten auto flatten duplicate. Line slice inspect
                        horizontal image strikethrough share follower.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className=" flex justify-center mt-16 max-lg:ml-0 ">
                <button
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
                >
                  <Link to="/blog">explore more</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="pen flex justi  max-w-3xl">
            <h1 className="text-7xl max-md:text-4xl max-xl:p-5 max-xl:ml-20 max-xl:mb-20 font-bold max-lg:p-3 ">
              We Pen Down Our <br /> Brightest Ideas
            </h1>
          </div>

          <div className="hii testhome">
            <div className="cardh hideehome   mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src="/blog/Frame 43.png" alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-3xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
            {/* </SwiperSlide>
            <SwiperSlide> */}
            <div className="cardh hideehome  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src={imgqq} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-4xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex box-pera coloo text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
            {/* </SwiperSlide>
            <SwiperSlide> */}
            <div className="cardh hideehome  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src={imgq1} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-4xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex box-pera coloo text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
          </div>
          {/* </SwiperSlide> */}
          {/* </Swiper> */}
          <div className=" flex justify-center mt-16 max-lg:ml-0 ">
            <button
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
            >
              <Link to="/blog">explore more</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Ideas;
