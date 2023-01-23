import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// ///////////////////////////
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Client = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={
          {
            // clickable: true,
          }
        }
        // navigation={true}

        className="mySwiper"
      >
        <SwiperSlide>
          <div className="ber list-disc mt-24 max-xl:hidden w-full">
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ber list-disc mt-24 max-xl:hidden w-full">
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ber list-disc mt-24 max-xl:hidden w-full">
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
            <ul className="flex w-full  list-disc">
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
              <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
              <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
              <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
              <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
              <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
              <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ////////////////// */}
      {/* <div className="ber list-disc mt-24 max-xl:hidden w-full">
        <ul className="flex w-full  list-disc">
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
          <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
          <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
          <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
          <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
        </ul>
        <ul className="flex w-full  list-disc">
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
          <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
          <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
          <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
          <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
        </ul>
      </div> */}

      <div className="loves mt- flex justify-center flex-col items-center">
        <div className="max-w-4xl ">
          <div className="w-full my-24 flex justify-center ">
            <h1 className="text-7xl max-md:text-4xl max-md:p-1  ">
              Our Clients Love Us
            </h1>
          </div>
          <div className="cj flex justify-around">
            <div className="mx-6 flex flex-col  justify-center">
              <h1 className="text-3xl"> CJ Jenkins</h1>
              <p className="text-gray-500">Product Manager, Moveworks</p>
            </div>
            <div className="comment w-2/3">
              <p>
                Codelinear allows businesses to make the best of all things
                digital. Our team of designers, developers, content strategies,
                and creative thinkers work together to enrich your digital
                existence
              </p>
            </div>
          </div>
          <div className="span mt-8 ml-28 items-center flex">
            <span className="mx-4 text-gray-500">1/8</span>
            <p className=" h-10 w-10 mx rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowBackIcon />
            </p>
            <p className=" h-10 w-10 mx-5 rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowForwardIcon />
            </p>
          </div>
        </div>
        <div className="clients flex justify-center mt-20 p-16 max-lg:p-5">
          <img className="w-3/4" src="/images/g1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Client;
