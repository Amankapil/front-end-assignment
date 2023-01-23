import React from "react";
import "./all.css";



const Dream = () => {
  return (
    <>
      <div className="dream  text-black bg-white flex justify-center w-full h-fit pt-20 ">
        <div className="width max-w-6xl ">
          <div className="up w-full flex flex-col justify-center items-center ">
            <h1 className="text-7xl max-w-3xl text-center text-black max-md:text-4xl font-'Graphik">
              We Don’t Just Design Stuff, We Make Dreams Come True
            </h1>
            <p className="w-1/2 text-center mt-12 text-gray-600  max-md:p-4 ">
              We are passionate about uncovering the best digital innovations
              for forward—thinking brands looking to push boundaries and drive
              significant impact.
            </p>

            <div className="experi mt-14">
              <ul className="text-center">
                <li className="text-4xl my-3 border-b-2 border-spacing-20 pb-4   ">
                  User Experience <sup>05</sup>
                </li>
                <li className="text-4xl my-3 border-b-2 border-spacing-6 pb-4">
                  Product Development<sup>07</sup>
                </li>
                <li className="text-4xl my-6 pb-6">
                  Digital Marketing <sup>04</sup>
                </li>
                <li className=" about text-3xl my-8 text-gray-600">
                  Explore All Services{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dream;
