import "./nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// import { Link } from "react-router-dom";

var id = null;
function navSlide() {
  var elem = document.getElementById("navigation-slide");
  var pos = 100;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.bottom = pos + "vh";
    }
  }
}

function navSlidesBack() {
  var elem = document.getElementById("navigation-slide");
  var pos = 5;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos === 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "vh";
    }
  }
}

function fade() {
  document.getElementById("navigation-slide").style.bottom = "-100%";
}

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <>
      <header>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "10px 20px",
            visibility: visible ? "visible" : "hidden",
            transform: visible ? "none" : "translateY(-100%)",
            transition: "transform 0.3s ease-in-out",
          }}
          className="navigation_bar"
        >
          {/* <nav ></nav> */}
          <ul className="nav_list max-md:p-0">
            <div className="logo top-0">
              <Link to="/">
                <img
                  className="z-50 logos  w-3/4 "
                  src="/images/Vector.svg"
                  alt=""
                />
                <div className="hide absolute top-6 left-2">
                  <p className="gol h-8 w-8 m-0 p-0 rounded-full bg-zinc-500 "></p>
                  <p className="ear ml-5 -mt-20 text-yellow-300">
                    we’re all ears
                  </p>
                </div>
              </Link>
            </div>
            <li className="nav_list-item mt-4" onClick={navSlide}>
              <div className="menu"></div>
            </li>
          </ul>
        </nav>
      </header>
      <section id="navigation-slide" className="z-50">
        <div className="nav-menu -mr-10 z-50" onClick={navSlidesBack}></div>
        <ul className="slide_nav_list max-md:left-0 z-50">
          <li className="slide_nav_list-item">
            <Link to="/about" className="slide_nav_links" onClick={fade}>
              About
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Services" className="slide_nav_links" onClick={fade}>
              Services
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Work" className="slide_nav_links" onClick={fade}>
              Work
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/career" className="slide_nav_links" onClick={fade}>
              Career
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Blog" className="slide_nav_links" onClick={fade}>
              Blog
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/letstalk" className="slide_nav_links" onClick={fade}>
              Let's Talk
            </Link>
          </li>
        </ul>
        <div className="details mt-60 max-sm:mt-40 mb-7">
          <div className="socials mb-7">
            <div className="city flex mx-3 max-md:my-5">
              <p className="nums mx-2">
                <LinkedInIcon />
              </p>
              <p className="nums mx-2">
                <FacebookIcon />
              </p>
              <p className="nums mx-2">
                <InstagramIcon />
              </p>
              <p className="nums mx-2">
                <TwitterIcon />
              </p>
            </div>
          </div>
          <p className="loc">
            12<sup>o</sup> 56' 27.06" N, 77<sup>o</sup> 32 ' 39.228"E
          </p>
          <div className="contact">
            <p className="mail">info@codelinear.com</p>
            <p className="phone">+1 415 523 5957</p>
          </div>
        </div>
      </section>
    </>
  );
}
