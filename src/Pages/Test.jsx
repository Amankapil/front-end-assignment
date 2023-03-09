import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import "./page.scss";

export default function Test() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        slidesPerGroupSkip={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="testhome">
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome2 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome3 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome4 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome4 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome2 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome3 cass"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imghome1 hideehome casee  ">
              <div className="bghome4 cass"></div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
