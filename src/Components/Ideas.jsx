import React from "react";

const Ideas = () => {
  return (
    <>
      <div className="loves mt-60 flex justify-center flex-col items-center">
        <div className="max-w-4xl ">
          <div className="pen">
            <h1 className="text-7xl max-md:text-4xl max-lg:p-3">
              We Pen Down Our <br /> Brightest Ideas
            </h1>
          </div>

          <div className="cards mt-60 flex max-md:flex-col">
            <div className="card   mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src="/images/c1.png" alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-4xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip mt-5">
                <p className="flex text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
                <div className="button mt-16 flex items-center justify-center text-center">
                  <button className="btn">Read More....</button>
                </div>
              </div>
            </div>
            <div className="card  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src="/images/c2.png" alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-4xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip mt-5">
                <p className="flex text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
                <div className="button mt-16 flex items-center justify-center text-center">
                  <button className="btn">Read More....</button>
                </div>
              </div>
            </div>
            <div className="card  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src="/images/c3.png" alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-4xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip mt-5">
                <p className="flex text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
                <div className="button mt-16 flex items-center justify-center text-center">
                  <button className="btn">Read More....</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ideas;