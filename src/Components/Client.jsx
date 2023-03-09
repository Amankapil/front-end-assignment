import React from "react";
import "./styles/clients.scss";

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
      {/* <Swiper
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
      </Swiper> */}

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
            <h1 className="text-7xl heading   max-md:text-4xl font-bold max-md:p-5  ">
              We Are Defined By How
              <br />
              Our Clients Perceive Us.
            </h1>
          </div>
          <div className="cj flex flex-col-reverse  justify-center items-center">
            <div className="mx-9 flex flex-col -ml-44 max-md:ml-0 my-10 justify- ">
              <h1 className="text-3xl font-thin"> CJ Jenkins</h1>
              <p className="text-gray-500 coloo">Product Manager, Moveworks</p>
            </div>
            <div className="comment family  max-md:ml-0  ml-10">
              <p>
                Codelinear allows businesses to make the best of all things
                digital. Our team of designers, developers, content strategies,
                and creative thinkers work together to enrich your digital
                existence
              </p>
            </div>
          </div>
          <div className="span mt-8 ml-28 items-end justify-end flex">
            <span className="mx-4 text-gray-500">1/8</span>
            <p className=" h-10 w-10 mx rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowBackIcon />
            </p>
            <p className=" h-10 w-10 mx-5 rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowForwardIcon />
            </p>
          </div>
        </div>
        <div className="clients max-w-8xl p-28  flex justify-center mt-20 flex-wrap w2  max-lg:p-10">
          <img
            className="w4 logoss text-white"
            src="/companies/g1.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g2.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g3.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g4.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white"
            src="/companies/g5.svg"
            alt=""
          />
          {/* </div> */}
          {/* <div className="clients flex justify-center flex-wrap -20 p-12 max-lg:p-5"> */}
          <img
            className="w4 logoss text-white"
            src="/companies/g6.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g7.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g8.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g9.svg"
            alt=""
          />
          <img
            className="w4 logoss text-white m-16"
            src="/companies/g10.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Client;
