import React from "react";

const Dream = () => {
  return (
    <>
      <div className="dream  text-black bg-white flex justify-center w-full pt-20">
        <div className="width max-w-6xl ">
          <div className="up w-full flex flex-col justify-center items-center ">
            <h1 className="text-7xl max-w-3xl text-center text-black max-md:text-4xl">
              We Don’t Just Design Stuff, We Make Dreams Come True
            </h1>
            <p className="max-w-3xl text-center mt-12 text-gray-600  max-md:p-4 ">
              We are passionate about uncovering the best digital innovations
              for forward—thinking brands looking to push boundaries and drive
              significant impact.
            </p>

            <div className="experi mt-14">
              <ul>
                <li className="text-2xl my-4 border-b-2 border-spacing-6 ">
                  User Experience <sup>05</sup>
                </li>
                <li className="text-2xl my-4 border-b-2 border-spacing-6">
                  Product Development<sup>07</sup>
                </li>
                <li className="text-2xl my-4">
                  Digital Marketing <sup>04</sup>
                </li>
                <li className="text-2xl my-8 underline  text-gray-600">Explore All Services </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dream;
