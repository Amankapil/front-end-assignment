import React from "react";
import { Link } from "react-router-dom";
import "./meet.css";

const Meet = () => {
  return (
    <>
      <div className="vision w-full mt-52 flex justify-center h-full relative  items-center">
        <div className="widthh w-full flex-col  h-full  flex justify relative">
          <div className=" produc w-full">
            <h2 className="text-7xl max-xl:text-5xl max-xl:p-5 leading-sng font-extrabold">
              Meet The Crew : A Clique <br /> Of Visionaries
            </h2>
            <p className="my-10 w-2/5 max-lg:w-full max-xl:p-5 max-md:p-6  ">
              To propel huminity forword by building digital products for
              business that unrich peoples lives Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
              dolor sit amet.
            </p>
            <div className=" mt-5 max-lg:ml-0 max-lg:p-8 ">
              <button className="btn about px-7 py-1 flex justify-center font-extrabold  text-1xl text-cyan-50">
                <Link  to="/career">careers</Link>
              </button>
            </div>
          </div>

          <div className="boxex  mt-5 flex justify-center items-center flex-col">
            <div className="box1 max-md:flex-col boxx  py-10 my-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0">
                <span className="mb-3 sup">01</span>
                <h1 className="text-4xl mt-5 font-thin">
                  Design <br />
                  Architects
                </h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d
                </p>
              </div>
            </div>
            <div className="box1 max-md:flex-col boxx  py-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">02</span>
                <h1 className="text-4xl mt-5 font-thin">Stretegies</h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d
                </p>
              </div>
            </div>
            <div className="box1 boxx max-md:flex-col  py-10  my-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">03</span>
                <h1 className="text-4xl mt-5 font-thin">Tech Expert</h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d
                </p>
              </div>
            </div>
            <div className="box1 boxx max-md:flex-col py-10   flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">04</span>
                <h1 className="text-4xl mt-5 font-thin">
                  Dilevery <br />
                  Manager
                </h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
