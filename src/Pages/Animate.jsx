import React, { useRef, useState, useEffect } from "react";

function Animate() {
  const verticalRef = useRef(null);
  const horizontalRef = useRef(null);
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    const vertical = verticalRef.current;
    const horizontal = horizontalRef.current;
    const verticalChild = vertical.firstChild;
    const horizontalChild = horizontal.firstChild;
    const verticalHeight = verticalChild.offsetHeight;
    const horizontalHeight = horizontalChild.offsetHeight;

    setRatio(horizontalHeight / verticalHeight);
  }, []);

  const handleScroll = (e) => {
    const vertical = verticalRef.current;
    const horizontal = horizontalRef.current;

    if (e.deltaY !== 0) {
      vertical.scrollTop += e.deltaY;
      horizontal.scrollLeft += e.deltaY / ratio;
    }

    e.preventDefault();
  };

  return (
    <div
      onWheel={handleScroll}
      className="flex justify-center items-center my-20 max-md:p "
    >
      <div
        ref={verticalRef}
        style={{ height: "400px", width: "700px", overflowY: "scroll" }}
        className="mt-  "
      >
        <div style={{ height: "500px", width: "400px" }}>
          <div
            className="leftcontainer w-full max-md:p-3"
            // onScroll={handleScrollY}
            style={{ overflowY: "scroll" }}
            // ref={(div) => {
            //   this.verticalScrollDiv = div;
            // }}
          >
            <div className="leftside w-[80%] h-full">
              <h1 className="text-7xl max-md:text-3xl family">Market Research</h1>
              <p className="coloo my-8 max-md:my-0">
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
              <h1 className="text-7xl max-md:text-3xl family">Stakholder workshops</h1>
              <p className="coloo my-8 max-md:my-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-5xl max-md:text-3xl family">
                Product strategic and Roadmaping
              </h1>
              <p className="coloo my-8 max-md:my-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-5xl max-md:text-3xl ">
                Technology Consulting and Platform Planning
              </h1>
              <p className="coloo my-8 max-md:my-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide>
              <SwiperSlide className="h-full"> */}
            <div className="leftside w-3/4 h-full">
              <h1 className="text-7xl max-md:text-3xl ">GMT Stretegies</h1>
              <p className="coloo my-8 max-md:my-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quasi rem nihil dicta aut quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ad quasi rem nihil dicta aut quia.
              </p>
            </div>
            {/* </SwiperSlide> */}
            {/* </Swiper> */}
          </div>
        </div>
      </div>
      <div
        ref={horizontalRef}
        style={{ height: "200px", width: "180px", overflowX: "scroll" }}
      >
        <div style={{ height: "200px", width: "1000px" }}>
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

            {/* </SwiperSlide> */}
            {/* </Swiper> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Animate;
