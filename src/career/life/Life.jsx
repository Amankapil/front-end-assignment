import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import i9 from "../Careerassets/image 14.png";
import i1 from "../Careerassets/image 15.png";
import i2 from "../Careerassets/image 16.png";
import i3 from "../Careerassets/image 18.png";
import { gsap, TweenMax, Power3 } from "gsap";
import "./life.scss";
import { Link } from "react-router-dom";
import ProducHire from "../../Pages/ProducHire";

const Life = () => {
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [webView, setWebView] = useState(false);
  const [back, setBack] = useState(false);
  const [commerce, setcommerce] = useState(false);
  const [cms, setCms] = useState(false);
  const open = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const openm = () => {
    if (!mobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const openw = () => {
    if (!webView) {
      setWebView(true);
    } else {
      setWebView(false);
    }
  };
  const openb = () => {
    if (!back) {
      setBack(true);
    } else {
      setBack(false);
    }
  };
  const openc = () => {
    if (!commerce) {
      setcommerce(true);
    } else {
      setcommerce(false);
    }
  };
  const opencms = () => {
    if (!cms) {
      setCms(true);
    } else {
      setCms(false);
    }
  };
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 15 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(".k", { x: "100%" }, { x: "-150%" });
  }, []);
  return (
    <>
      <div className="lead flex justify-center mt-40 h-full relative  items-center">
        <div className=" w-full flex-col h-full flex relative">
          <div className="lifeat ">
            <h1 className="text-7xl ml-52 max-lg:text-5xl max-xl:ml-0 max-xl:p-5">
              {" "}
              Life At Codelinear
            </h1>
            <p className="coloo w-1/2 mt-6 max-md:w-full max-xl:p-5 ml-52  max-xl:ml-0 ">
              We believe in actions over statements. When we say we are diverse,
              we are inclusive and we are here to give back to the community, we
              mean it! We have painstakingly built an environment of "Community"
              within us, in which we uplift and empower one another, and we take
              immense pride in it.
            </p>
            <div className="imgd my-14 overflow-hidden mt-16 flex">
              <img className=" k  w-2/3 rounded-2xl" src={i1} alt="" />
              <img className=" k  w-2/3 mx-28  max-lg:mx-10 rounded-2xl" src={i2} alt="" />
              <img className=" k w-2/3 mx-28 max-lg:mx-10 rounded-2xl" src={i3} alt="" />
              {/* <div className="k img1c1  "></div>
        <div className="k img2c2 mx-44 "></div>
        <div className="k img3c3"></div> */}
            </div>

            <h1 className="position-h1 ml-44 max-xl:ml-0  mt-20 flex justify-start font-extrabold">
              Open Positions
            </h1>

            <section className="open-pos ml-44 max-xl:ml-0  flex flex-col justify-center items-start">
              {show ? (
                <div className="fixed bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Software Development Engineer - Frontend{" "}
                        </h1>
                        <Link onClick={() => setShow(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={open}
                    className="w-full flex justify-between items-center"
                  >
                    Product Designer (UX/UI){" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}

              <hr className="pos-hr" />
              {mobile ? (
                <div className="absoltek bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Product Designer
                        </h1>
                        <Link onClick={() => setMobile(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={openm}
                    className="w-full flex justify-between items-center"
                  >
                    Product Designer (UX/UI){" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}
              <hr className="pos-hr" />
              {webView ? (
                <div className="absoltek bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Product Designer
                        </h1>
                        <Link onClick={() => setWebView(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={openw}
                    className="w-full flex justify-between items-center"
                  >
                    Software Development Engineer - Frontend{" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}
              <hr className="pos-hr" />
              {back ? (
                <div className="absoltek bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Product Designer
                        </h1>
                        <Link onClick={() => setBack(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={openb}
                    className="w-full flex justify-between items-center"
                  >
                    Software Development Engineer - Backend{" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}
              <hr className="pos-hr" />
              {commerce ? (
                <div className="absoltek bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Product Designer
                        </h1>
                        <Link onClick={() => setcommerce(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={openc}
                    className="w-full flex justify-between items-center"
                  >
                    Software Development Engineer - CMS{" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}
              <hr className="pos-hr" />

              {cms ? (
                <div className="absoltek bg-fixed  hired">
                  <div className="lead flex justify-center h-full relative  items-center">
                    <div className="width w-full flex-col min-h-screen h-full items-center ml-20  justify-center relative">
                      <div className="back flex justify-between items-center w-3/4">
                        <h1 className="text-5xl family mt-10 mb-6">
                          Product Designer
                        </h1>
                        <Link onClick={() => setCms(false)}>
                          <div className="baorder b"></div>
                        </Link>
                      </div>
                      <p className="coloo mb-">
                        <p>Banglore Remote</p>
                        <p>Experience Bnad: 3+ Yrs</p>
                      </p>

                      <p className="coloo my-16 w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa libero fuga dolores corrupti explicabo dicta ab,
                        facilis quibusdam, ipsum eaque, tempora minima incidunt
                        eveniet harum similique laboriosam laudantium quaerat
                        sapiente. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni est, culpa delectus consequatur
                        molestiae suscipit aspernatur inventore unde minus
                        asperiores.
                      </p>
                      <p className="family my-20 text-3xl  w-1/2">
                        Figma | WireFrames & User Flow | Prototype UX Research |
                        Persons | Design System
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
                </div>
              ) : (
                <div className="positions">
                  <button
                    onClick={opencms}
                    className="w-full flex justify-between items-center"
                  >
                    Software Development Engineer - e-commerce{" "}
                    <span className="office">Bangalore (Remote)</span>
                  </button>
                </div>
              )}

              <hr className="pos-hr" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Life;
