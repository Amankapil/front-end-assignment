import React from "react";
import "./why.scss";
import Vector from "./svgs/Vector.svg";
import Vector2 from "./svgs/Vector-1.svg";
import Vector3 from "./svgs/Vector-2.svg";
const Why = () => {
  return (
    <>
      <div className="lead flex justify-center mt-40 h-full relative  items-center">
        <div className="width w-full flex-col h-full items-center flex justify-center relative">
          <div className="why">
            <h1 className="text-7xl max-lg:text-5xl max-xl:p-5 font-extrabold">Why Us ?</h1>
            <p className="coloo mt-10 w-3/4 max-xl:p-5 max-lg:w-full">
              We are a diverse blend of experts, young professionals, and even
              mentees. And though we may come from diverse backgrounds, our
              drive to make a difference in society unites us. Our cohort
              comprises designers, developers, strategists, and marketers, and
              collectively we blend each of our expertise to innovate, to
              impact.If this sounds like you, we have a role for you!
            </p>
          </div>
          <div className="down_card mt-20 flex max-md:flex-col max-xl:flex-wrap">
            <div className="card121 p-5 justify-end flex flex-col items-center">
              <h1 className="m text-2xl font-extrabold">Sauce Bell</h1>
              <p className="coloo text-center my-10">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
              <img className="w-1/2" src={Vector} alt="svg h bhai" />
            </div>
            <div className="card121 ml-5 max-md:ml-0 p-5 max-md:my-5 justify-end flex flex-col items-center">
              <h1 className="m text-2xl font-extrabold">Sauce Bell</h1>
              <p className="coloo text-center my-10">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
              <img className="w-1/2" src={Vector2} alt="svg h bhai" />
            </div>
            <div className="card121 mx-5 max-md:mx-0 max-md:my-5 p-5 justify-end flex flex-col items-center">
              <h1 className="m text-2xl font-extrabold">Sauce Bell</h1>
              <p className="coloo text-center my-10">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
              <img className="w-1/2" src={Vector3} alt="svg h bhai" />
            </div>
            <div className="card121 p-5 justify-end flex flex-col items-center">
              <h1 className="m text-2xl font-extrabold">Sauce Bell</h1>
              <p className="coloo text-center my-10">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
              <img className="w-1/2" src={Vector} alt="svg h bhai" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
