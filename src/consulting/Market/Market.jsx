// import React from "react";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import "./market.scss";

const Market = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const horizontalScrollDivRef = useRef(null);

  const handleMouseWheel = (event) => {
    console.log(horizontalScrollDivRef.current.scrollLeft); // log the current scroll position
    const { deltaY } = event;
    const scrollDiv = horizontalScrollDivRef.current;
    const maxScrollLeft = scrollDiv.scrollWidth - scrollDiv.clientWidth;
    if (deltaY < 0) {
      scrollDiv.scrollLeft -= 100; // adjust this value to your desired scroll distance
    } else if (deltaY > 0 && scrollDiv.scrollLeft !== maxScrollLeft) {
      scrollDiv.scrollLeft += 100; // adjust this value to your desired scroll distance
    } else if (deltaY > 0 && scrollDiv.scrollLeft === maxScrollLeft) {
      console.log("Scroll to end");
      scrollDiv.scrollLeft = maxScrollLeft;
    }
  };

  return (
    <>
      <div className="vision w-full mt-52 flex justify-center h-full relative  items-center">
        <div className="widthh max-md:flex-col max-md:p-8  w-full flex  relative">
          <div
            className="leftcontainer w-full max-md:p-10"
            // onScroll={handleScrollY}
            style={{ overflowY: "scroll" }}
            // ref={(div) => {
            //   this.verticalScrollDiv = div;
            // }}
          >
            <div className="leftside w-3/4 h-full">
              <h1 className="text-7xl max-md:text-3xl  family">Market Research</h1>
              <p className="coloo my-8 max-md:text-sm">
                As technology is propelling the world into a new realm of
                disruptions, our strategic market research enables you to
                identify the viability of the product by directly taking
                insights from targeted consumers and market trends, enabling you
                to make decisions driven by consumer behaviour and data.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-7xl family">Stakholder workshops</h1>
              <p className="coloo my-8 max-md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-5xl family">
                Product strategic and Roadmaping
              </h1>
              <p className="coloo my-8 max-md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-5xl ">
                Technology Consulting and Platform Planning
              </h1>
              <p className="coloo my-8 max-md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-7xl ">GMT Stretegies</h1>
              <p className="coloo my-8 max-md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide> */}
            {/* </Swiper> */}
          </div>

          <div
            style={{ display: "flex", overflowX: "auto", width: "1000px" }}
            ref={horizontalScrollDivRef}
            onWheel={handleMouseWheel}
            className="rightcontainer flex items-center justify-center w-3/4 max-lg:w-full"
          >
            <ul className="flex">
              {/* <SwiperSlide> */}
              <li className="p-5 tex">UX</li>
              {/* </SwiperSlide> */}
              {/* <SwiperSlide> */}
              {/* <SwiperSlide> */}
              <li className="p-5 tet-sm">No Code</li>
              {/* </SwiperSlide>
              <SwiperSlide> */}
              <li className="p-5 txt-sm">Tomato Chilli</li>
              {/* </SwiperSlide>
              <SwiperSlide> */}
              <li className="p-5 tet-sm">Rice Ricoota</li>
              <li className="p-5 tet-sm">Rice Ricoota</li>
              <li className="p-5 txt-sm">Tomato Chilli</li>
              <li className="p-5 tet-sm">Rice Ricoota</li>
              <li className="p-5 tet-sm">Rice Ricoota</li>
              <li className="p-5 tet-sm">No Code</li>
              <li className="p-5 tet-sm">No Code</li>
              <li className="p-5 tet-sm">No Code</li>
              <li className="p-5 tet-sm">Rice Ricoota</li>
              <li className="p-5 tet-sm">Rice Ricoota</li>
              {/* </SwiperSlide> */}
              {/* </Swiper> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
