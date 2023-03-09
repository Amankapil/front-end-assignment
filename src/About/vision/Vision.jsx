import React from "react";
import "./vision.scss";
import svg1 from "../../career/why/svgs/Vector-1.svg";
import svg2 from "../../career/why/svgs/Vector-2.svg";
import svg3 from "../../career/why/svgs/Vector.svg";

const Vision = () => {
  return (
    <>
      <div className="vision w-full mt-72 max-md:mt-3 flex justify-center h-full relative  items-center">
        <div className="widthh w-full  h-full  flex justify relative max-md:flex-col max-xl:p-5 ">
          <div className="lefts w-full">
            <h2 className="text-4xl font-extrabold">Our Vision</h2>
          </div>
          <div className="rights text-3xl max-md:text-xl leading-10 produc font-medium  ml40">
            <p>
              To propel huminity forword by building digital products for
              business that unrich peoples lives
            </p>
          </div>
        </div>
      </div>
      <div className="vision w-full mt-52 max-md:mt-12 flex justify-center h-full max-xl:p-5 relative  items-center">
        <div className="widthh w-full  h-full  flex justify relative max-md:flex-col">
          <div className="leftss product w-full">
            <h2 className="text-4xl font-extrabold">Guiding Principle</h2>
            <p className="my-10 max-md:text-1xl coloo">
              To propel huminity forword by building digital products for
              business that unrich peoples lives Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
              dolor sit amet.
            </p>
            <div className="max-md:w-full max-md:flex opacity-60 hover:opacity-100 max-md:justify-end items-end max-md:-ml-20  ">
              <p className="skip">skip ahead</p>
            </div>
          </div>
          <div className="allright  w-128 ml-32 max-md:w-full max-xl:ml-4 ">
            <div className="rights text-base my-10 produc font-medium flex  ml40">
              <img className="h-16 w-24" src={svg1} alt="svg" />
              <div className="scv">
                <h1 className="text-5xl mb-10 font-extrabold mx-5">Ideal</h1>
                <p className="-ml-12">
                  To propel huminitz forword by building digital products for
                  business that unrich peoples lives Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maxime Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Optio enim
                  minima quam repudiandae labore fugit mollitia maiores
                  consequatur molestiae! libero ex asperiores fugiat. Voluptatem
                  minus error porro molestiae ipsam.
                </p>
              </div>
            </div>
            <div className="rights text-base my-20 produc font-medium flex  ml40">
              <img className="h-16 w-24" src={svg2} alt="svg" />
              <div className="scv">
                <h1 className="text-5xl mb-10 font-extrabold mx-5">Impact</h1>
                <p className="-ml-12">
                  To propel huminity forword by building digital products for
                  business that unrich peoples lives Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maxime Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Optio enim
                  minima quam repudiandae labore fugit mollitia maiores
                  consequatur molestiae! libero ex asperiores fugiat. Voluptatem
                  minus error porro molestiae ipsam.
                </p>
              </div>
            </div>
            <div className="rights text-base my-10 produc font-medium flex  ml40">
              <img className="h-16 w-24" src={svg3} alt="svg" />
              <div className="scv">
                <h1 className="text-5xl mb-10 font-extrabold mx-5">
                  Innovation
                </h1>
                <p className="-ml-12">
                  To propel huminity forword by building digital products for
                  business that unrich peoples lives Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maxime Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Optio enim
                  minima quam repudiandae labore fugit mollitia maiores
                  consequatur molestiae! libero ex asperiores fugiat. Voluptatem
                  minus error porro molestiae ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
