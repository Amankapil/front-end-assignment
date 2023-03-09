import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import "./styles/agency.scss";
import React, { useState, useEffect } from "react";
import { gsap, TweenMax, Power3 } from "gsap";

const Dummy = () => {
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
      <section id="about" className=" agency mt-28">
        <div id="rectangle" className="max-xl:hidden -mt-20 z-30"></div>

        <div className="some max-md:flex  max-md:flex-col max-md:w-full">
          <div id="abtcnt">
            <h1 className="abth1 max-md:w-full w-full text-7xl max-md:text-lg">
              We help our clients define and shape the future.
            </h1>
            <p id="abtdmycnt">
              We are a design-led development firm operating at the intersection
              of human touch, data-driven analytics and cutting-edge technology.
            </p>
            <div className=" afterl mt-5 max-lg:ml-0 w- ">
              <button
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
              >
                all works
              </button>
            </div>
          </div>
          {Widht > 1100 ? (
            <>
              <div className="allimgdummmy coloo w-full h-full max-xl:flex max-xl:justify-center max-xl:items-center max-xl:flex-wrap">
                <div className="onto w-80 h-80">
                  <div
                    id="imgs"
                    className="imges max-lg:p-5 max-xl:px-20"
                  ></div>
                  <div id="imgs1" className="flex items-center">
                    <h1 className="text-3xl opacity-80">COWBOY</h1>
                    <p id="imgs1p" className="coloo">
                      shopify platform design + development
                    </p>
                  </div>
                </div>
                <div className="onto">
                  <div id="img2" className="imges max-xl:px-20"></div>
                  <div id="imgs2" className="flex items-center">
                    <h1 className="text-3xl opacity-80">Studio Proper</h1>
                    <p id="imgs2p">shopify platform design + development</p>
                  </div>
                </div>
                <div className="onto">
                  <div id="img3" className="imges max-xl:px-20"></div>
                  <div id="imgs3" className="imges">
                    <h1 className="text-3xl font-thin opacity-80">
                      WILLAIM ABRAHAM
                    </h1>
                    <p id="imgs3p">shopify platform design + development</p>
                  </div>
                </div>
                <div className="onto">
                  <div id="img4" className="imges"></div>
                  <div id="imgs4">
                    <h1 className="text-3xl font-thin opacity-80">
                      Lyra Health SG
                    </h1>
                    <p id="imgs4p">bigcommerce platform design + development</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="testhome">
                <div className="imghome1 hideehome">
                  <div className="bghome"></div>
                  <div id="i" className="p-5">
                    <h1>COWBOY</h1>
                    <p id="imgsp" className="coloo">
                      shopify platform design + development
                    </p>
                  </div>
                </div>

                <div className="imghome1 hideehome">
                  <div className="bghome2"></div>
                  <div id="i" className="p-5">
                    <h1>COWBOY</h1>
                    <p id="imgsp" className="coloo">
                      shopify platform design + development
                    </p>
                  </div>
                </div>

                <div className="imghome1 hideehome">
                  <div className="bghome3"></div>
                  <div id="i" className="p-5">
                    <h1>COWBOY</h1>
                    <p id="imgsp" className="coloo">
                      shopify platform design + development
                    </p>
                  </div>
                </div>

                <div className="imghome1 hideehome">
                  <div className="bghome4"></div>
                  <div id="i" className="p-5">
                    <h1>COWBOY</h1>
                    <p id="imgsp" className="coloo">
                      shopify platform design + development
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Dummy;
