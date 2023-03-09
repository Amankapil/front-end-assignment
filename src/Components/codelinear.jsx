import { useLocation } from "react-router-dom";
import codelinear from "./white.svg";
import "./all.css";

export default function Codelinear() {
  const url = useLocation();

  if (url.pathname === "/") {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          {" "}
          to impact
        </p>
      </div>
    );
  } else if (url.pathname === "/about") {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          to innovation
        </p>
      </div>
    );
  } else if (url.pathname === "/casestudy" || url.pathname === "/work") {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          to innovation
        </p>
      </div>
    );
  } else if (
    url.pathname === "/Services/" ||
    url.pathname === "/consulting" ||
    url.pathname === "/userexper" ||
    url.pathname === "/product" ||
    url.pathname === "/digital" ||
    url.pathname === "/career"
  ) {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          to pioneers
        </p>
      </div>
    );
  } else if (url.pathname === "/Blog" || url.pathname === "/bloginside") {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          to ideas
        </p>
      </div>
    );
  } else if (url.pathname === "/letstalk") {
    return (
      <div className="footer-animation w-[100%] flex">
        <img src={codelinear} alt="" className="codelinear w-[100%] z-0 " />
        <p className="footer-animationtxt w-full flex mt-8 -ml-20 text-white opacity-80 text-2xl">
          to passion
        </p>
      </div>
    );
  }
}
