import React from "react";
import { Link } from "react-router-dom";
import "./page.scss";

const ProducHire = () => {
  return (
    <>
      <div className="lead flex justify-center h-full relative  items-center">
        <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
          <div className="back flex justify-between items-center w-3/4">
            <h1 className="text-5xl family mt-10 mb-6">Product Designer</h1>
            <Link to="/career">
              <div className="baorder b"></div>
            </Link>
          </div>
          <p className="coloo mb-">
            <p>Banglore Remote</p>
            <p>Experience Bnad: 3+ Yrs</p>
          </p>

          <p className="coloo my-16 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            fuga dolores corrupti explicabo dicta ab, facilis quibusdam, ipsum
            eaque, tempora minima incidunt eveniet harum similique laboriosam
            laudantium quaerat sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni est, culpa delectus consequatur molestiae
            suscipit aspernatur inventore unde minus asperiores.
          </p>
          <p className="family my-20 text-3xl  w-1/2">
            Figma | WireFrames & User Flow | Prototype UX Research | Persons |
            Design System
          </p>
          <p className="coloo">feel like you are Match</p>
          <div className=" mt-5 max-lg:ml-0 ">
            <button
              //   onMouseEnter={onEnter}
              //   onMouseLeave={onLeave}
              className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProducHire;
