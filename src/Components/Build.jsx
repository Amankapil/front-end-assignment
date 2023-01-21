import React from "react";
// import "./build.css"

const Build = () => {
  return (
    <>
      <div className=" bhai bg-[url('C:\Users\AMANK\Desktop\salesbee\src\images\bg.png')] h-full bg-center bg-origin-padding bg-no-repeat bg-cover w-ful flex">
        <div className="build_width w-9/126 flex flex-col ml-24 max-md:ml-2 justify-center my-20 pt-10">
          <div className="main-content text-white font-thin text-6xl w-full my-11  max-md:text-4xl max-md:">
            <h1>We build digital products </h1>
            {/* <br /> */}
            <h1> that uplift your brand values</h1>
          </div>
          <div className="dumm text-left text-white mt-6 my-16 -ml-0 max-md:p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu amet diam pellentesque
              <br />
              nunc mattis euismod augue quisque. Quam.
            </p>
          </div>

          <div className="button mt-11">
            <button className="btn underline text-3xl text-cyan-50">
              ABOUT US
            </button>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default Build;
