import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full sticky top-0  z-50 p-3">
      <div className="logo ">
        <img src="/images/Vector.png" alt="" />
      </div>
      <div className="hamburger text-yellow-300">
        <MenuIcon />
        
      </div>
    </div>
  );
};

export default Navbar;
