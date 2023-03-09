import React from "react";
import "./contact.scss";
import { gsap, TweenMax, Power3 } from "gsap";

const Contact = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0d0d0d", scale: 1 });
  };
  return (
    <>
      <div className="vision w-full mt-40 flex justify-center h-full relative  items-center">
        <div className="widthh w-full  h-full  flex justify flex-col relative max-md:flex-col max-xl:p-5 ">
          <div className="rich flex justify-center h-full ">
            <h1 className="text-4xl font-extrabold mb-28">
              How Can We Rich You
            </h1>
          </div>
          <div className="formall max-md:flex-col">
            <div className="form flex justify-center h-full max-md:flex-col">
              <input
                type="text"
                className="formm mx-9 max-md:mx-0 w-1/3 max-md:w-full bg-[#0d0d0d] font-extrabold border-b-2 p-4 opacity-50"
                placeholder="First Name*"
              />
              <input
                type="text"
                className="formm ml-16 max-md:ml-0 w-1/3 max-md:w-full bg-[#0d0d0d] font-extrabold border-b-2 p-4 opacity-50"
                placeholder="Last Name*"
              />
            </div>
            <div className="form flex justify-center h-full max-md:flex-col mt-10 max-md:mt-2">
              <input
                type="email"
                className="formm mx-9 max-md:mx-0 w-1/3 max-md:w-full bg-[#0d0d0d] font-extrabold border-b-2 p-4 opacity-50"
                placeholder="Email*"
              />
              <input
                type="number"
                className="formm ml-16 max-md:ml-0 w-1/3 max-md:w-full bg-[#0d0d0d] font-extrabold border-b-2 p-4 opacity-50"
                placeholder="Phone*"
              />
            </div>
            <div className="form flex justify-center h-full my-6">
              <textarea
                name="message"
                placeholder="Your Message *"
                id=""
                cols="0"
                rows=""
                className="message ml-7 max-md:ml-0 ma bg-[#0d0d0d] font-extrabold border-b-2 p-1 opacity-50"
              ></textarea>
            </div>
          </div>

          <div className=" mt-16 w-full flex justify-center  max-lg:ml-0 ">
            <button
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
            >
              Submit Your Response
            </button>
          </div>

          <div className="banglore  flex flex-col justify-center items-center mt-28 ">
            <div className="bangloremain family text-3xl">Banglore</div>
            <div className="address mt-5">
              <p className="coloo">#671, 26 Main, 17th crosst</p>
              <p className="coloo">6th phase , J P Nagar Banglore</p>
            </div>
            <div className="cordinates text-3xl coloo mt-20">
              12*56'27.06",N77*32'39.228"E
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
