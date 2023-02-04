import React from "react";
import logo from "../images/logo-white.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 flex justify-between content-center py-5 px-9 bg-gradient-to-b from-black h-32 w-full">
      <img src={logo} alt="" className="contrast-100 self-center h-14 w-14" />
      <ui className="decoration-none list-none flex gap-8">
        <li className="cursor-pointer text-xl block self-center px-2 py-1">
          Home
        </li>
        <li className="cursor-pointer text-xl block self-center px-2 py-1">
          Shop
        </li>
      </ui>
    </header>
  );
};

export default Header;
