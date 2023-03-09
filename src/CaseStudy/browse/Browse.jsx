import React from "react";
import "./browse.scss";

const Browse = () => {
  return (
    <div className="vision w-full mt-72 flex justify-center h-full relative  items-center">
      <div className="widthh w-full  h-full  flex-col flex justify items-center relative max-md:flex-col max-xl:p-5 ">
        <div className="browse">
          <h1 className="text-7xl font-extrabold max-md:text-3xl ">
            Browse Through Other Business That We Have Impacted
          </h1>
        </div>
        <div className="other  w-full mt-44 flex max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="cow relative w-1/2">
            <div className="cimg1 "></div>
            <h1 className="text-2xl font-extrabold mt-6">COWBOY</h1>
            <span className="coloo mt-3">
              shopify platform design + development
            </span>
          </div>
          <div className="cow relative w-1/2 max-md:mt-8 mx-10">
            <div className="cimg2"></div>
            <h1 className="text-2xl font-extrabold mt-6 ">COWBOY</h1>
            <span className="coloo mt-3">
              shopify platform design + development
            </span>
          </div>
          <div className="cow relative w-1/2 max-md:mt-8">
            <div className="cimg3"></div>
            <h1 className="text-2xl font-extrabold mt-6 ">COWBOY</h1>
            <span className="coloo mt-3">
              shopify platform design + development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
