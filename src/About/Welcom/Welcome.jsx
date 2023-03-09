import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";
import { useLocation } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const Welcome = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* <div className="absolute w-full h-full right-[0%]">
      <Spline scene="https://prod.spline.design/TXm918zzHusk1Xwz/scene.splinecode" />
      </div> */}
      <div className="welcome flex w-full h-screen  justify-center  items-center">
        <div className="widt  max-w-5xl max-xl:ml-0 w-full -ml-52  flex justify-center items-center">
          <h1 className="text-6xl max-md:text-4xl max-md:ml-3 max-xl:p-10  ">
            Welcome to The World Of Codelinear -
            <br />
            The World Of Impact
          </h1>
        </div>

        {/*  */}
        {/* <div> */}

        {/* </div> */}
        {/* <div id="canvas3d"></div> */}
      </div>
    </>
  );
};

export default Welcome;
