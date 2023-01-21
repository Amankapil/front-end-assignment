import React from "react";

const Agency = () => {
  return (
    <>
      <div className="agency flex justify-center w-full items-center relative">
        <div className="ag_width flex justify-center max-w-screen-xl w-full items-center flex-col">
          {/* //////////////// */}
          <div className="topwala">
            <div className="last text-white flex justify-center items-center my-6">
              <p className="t">Oh we’re just getting started</p>
            </div>
          </div>
          {/* //////////////// */}

          <div className="another w-full relative mb-11">
            <div className="head">
              <h1 className="text-8xl font-thin max-md:text-5xl max-lg:p-5  text-white ">
                we are not just another <br />
                digital agency
              </h1>
            </div>
            <div className="pera mt-11 w-3/4 relative z-10 ">
              <p className="text-white max-lg:p-5">
                As a modern-day full-service digital agency, Codelinear believes
                in putting the human first. We blend tangible results with a
                human touch by maintaining consistent and rewarding user
                experiences across every touchpoint.
              </p>

              <p className="text-white mt-11 relative z-10 max-lg:p-5 ">
                Link figjam object ellipse layer group invite vertical. Fill
                project ellipse project vector. Asset editor auto figjam layout.
                Image pen editor hand community object underline rotate.
              </p>
            </div>
          </div>

          <div className="works flex flex-col w-full h-full">
            <div className="head w-52">
              <span className="underline text-4xl max-lg:p-5 mt-14">All Works</span>
            </div>
            <div className="rotate -left-11 bg-black w-128 h-96 absolute -rotate-32 mt-16 max-xl:hidden"></div>
            <div className="images w-full justify-center items-center flex max-md:flex-col">
              <div className="image_1  mx-10 mt-96 h-full  max-lg:mt-3">
                <div>
                  <img src="/images/image 3.png" alt="" />
                  <div className="detail flex my-5  max-md:w-full">
                    <h4 className="text-xl mx-4">Studio Proper</h4>
                    <span className="text-zinc-600">
                      shopify platform + development
                    </span>
                  </div>
                </div>
                {/* ////////////////////////////// */}
                <div>
                  <div className="detail flex  mt-14">
                    <h4 className="text-xl mx-4">Headphones SG</h4>
                    <span className="text-zinc-600">
                      bigcommerce design + development
                    </span>
                  </div>
                  <img
                    className="mt-3 h-128 w-full  max-md:mt-3"
                    src="/images/i9.png"
                    alt=""
                  />
                </div>
              </div>
              {/* ////////////////////////////////////////// */}
              <div className="image_2 -mt-16  max-md:mt-3 ">
                <div>
                <div className=" max-md:flex  max-md:justify-center">
                    <img
                      className="mt-7 max-xl:w-3/4 "
                      src="/images/image 5.png"
                      alt=""
                    />
                  </div>
                  <div className="detail flex my-5">
                    <h4 className="text-xl mx-4">COWBOY</h4>
                    <span className="text-zinc-600">
                      shopify platform design + development
                    </span>
                  </div>
                </div>
                <div>
                  <div className="detail flex my-5 mt-28">
                    <h4 className="text-xl mx-4">WILLAIM ABRAHAM</h4>
                    <span className="text-zinc-600">
                      shopify platform design + development
                    </span>
                  </div>
                  <div className=" max-md:flex  max-md:justify-center">
                    <img
                      className="mt-7 max-xl:w-3/4 "
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
