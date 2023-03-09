import React from "react";
import "./all.css";

const Agency = () => {
  return (
    <>
      <div className="agency flex justify-center w-full items-center mt-52 relative">
        <div className="ag_width flex justify-center -ml-20 max-lg:left-0 max-lg:ml-0  max-w-6xl w-full items-center flex-col ">
          {/* //////////////// */}
          <div className="topwala">
            <div className="last text-white flex justify-center items-center my-16 pt-60 relative ">
              <p className="t">Oh we’re just getting started</p>
            </div>
          </div>
          {/* //////////////// */}

          <div className="another w-full  mb-11 relative">
            <div className="head">
              <h1 className="text-7xl font-thin max-md:text-5xl max-lg:p-5 z-50 relative text-white ">
                We Are Not Just Another <br />
                Digital Agency
              </h1>
            </div>
            <div className="pera mt-8 w-3/4  z-50 relative">
              <p className="text-gray-500 z-50 max-lg:p-5 relative">
                As a modern-day full-service digital agency, Codelinear believes
                in putting the human first. We blend tangible results with a
                human touch by maintaining consistent and rewarding user
                experiences across every touchpoint.
              </p>

              <p className="text-gray-500 mt-8  z-50 max-lg:p-5 ">
                Link figjam object ellipse layer group invite vertical. Fill
                project ellipse project vector. Asset editor auto figjam layout.
                Image pen editor hand community object underline rotate.
              </p>
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="works flex flex-col w-full h-full">
            <div className="head w-52">
              <span className="about text-4xl max-lg:p-5 mt-5 z-50 relative">
                All Works
              </span>
            </div>
            <div className="-left-48 bg-black w-128 h-128 absolute -rotate-32 z-10 -mt-72 max-xl:hidden"></div>
            {/* ================================================---------------------------------------===== */}
            <div className="images justify-center z-0 items-center flex max-md:flex-col  -mt-60 max-lg:mt-32">
              <div className="image_1 w-1/2 mt-72 h-full  max-lg:mt-3">
                <div className="card_1">
                  <img className="check -mt-3 w-full" src="/images/image 3.png" alt="" />
                  <div className="detail flex my-5  max-md:w-full">
                    <h4 className="text-2xl mx-4 uppercase">Studio Proper</h4>
                    <span className="text-zinc-600">
                      shopify platform + development
                    </span>
                  </div>
                </div>
                {/* ////////////////////////////// */}
                <div className="card_3">
                  <div className="detail flex  mt-14">
                    <h4 className="text-2xl mx-4 uppercase font-thin">
                      Headphones SG
                    </h4>
                    <span className="text-zinc-600">
                      bigcommerce design + development
                    </span>
                  </div>
                  <img
                    className="check w-full mt-3 h-128  max-md:mt-3"
                    src="/images/cycle.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* ///=----------------------------------------------/////////////////////////////////////// */}
              <div className="image_2 w-1/2 ml-20 -mt-16  max-md:mt-3 ">
                <div className="card_2">
                  <div className=" max-md:flex  max-md:justify-center">
                    <img
                      className="check w-full mt-7 max-xl:w-3/4 z-10 "
                      src="/images/image 5.png"
                      alt=""
                    />
                  </div>
                  <div className="detail flex my-5">
                    <h4 className="text-2xl mx-4 uppercase font-thin">
                      COWBOY
                    </h4>
                    <span className="text-zinc-600">
                      shopify platform design + development
                    </span>
                  </div>
                </div>
                <div className="card_4">
                  <div className="detail flex my-5 mt-28">
                    <h4 className="text-2xl mx-4 uppercase font-thin">
                      WILLAIM ABRAHAM
                    </h4>
                    <span className="text-zinc-600">
                      shopify platform design + development
                    </span>
                  </div>
                  <div className=" max-md:flex  max-md:justify-center">
                    <img
                      className="check mt-7 max-xl:w-3/4 "
                      src="/images/image 4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
