import { useState, useRef, useEffect } from "react";
import "./page.scss";
import { gsap, TweenMax, Power3 } from "gsap";

const images = [
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
  "/images/c1.png",
];

const Zoom = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(".casee", { x: "100%" }, { x: "-150%" });
  }, []);
  return (
    <>
      {/* <div className="testhome">
        <div className="imghome1 hideehome casee  ">
          <div className="bghome cass"></div>
        </div>

        <div className="imghome1 hideehome casee hover:scale-125">
          <div className="bghome2 cass"></div>
        </div>

        <div className="imghome1 hideehome casee hover:scale-125">
          <div className="bghome3 cass"></div>
        </div>

        <div className="imghome1 hideehome casee hover:scale-125">
          <div className="bghome4 cass"></div>
        </div>
      </div> */}
      <div className="flex">
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Zoom;
