import React from "react";
import "./all.css";
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center max-sm:px-3 w-full sticky top-0  z-50 px-36 ">
      <div className="logo top-0">
        <img className="z-50 logos  w-3/4 " src="/images/Vector.svg" alt="" />
        <div className="hide absolute top-6 left-2">
          <p className="gol h-8 w-8 m-0 p-0 rounded-full bg-zinc-500"></p>

          <span className=" ear ml-5 -mt-20 text-yellow-300">we’re all ears</span>
        </div>
      </div>
      <div className="hamburger text-yellow-300">
        {/* <svg class="text-lg"> */}
        <DragHandleIcon className="" />
        {/* </svg> */}
      </div>
    </div>
  );
};

export default Navbar;
