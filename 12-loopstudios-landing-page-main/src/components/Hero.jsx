import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import heroImg from "../assets/desktop/image-hero.jpg";
import mobileheroImg from "../assets/mobile/image-hero.jpg";
import Menu from "./Menu";

const Hero = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="relative">
        <img
          className="md:flex w-full hidden absolute top-0 -z-10 brightness-50"
          src={heroImg}
          alt="img"
        />
        <img
          className="w-full absolute flex md:hidden top-0 -z-10"
          src={mobileheroImg}
          alt="img"
        />
        <nav className="flex justify-between px-5 py-10 md:px-40 md:py-20">
          <img className="w-32 mb-2" src={logo} alt="logo" />
          <ul className="gap-8 hidden md:flex text-white">
            <li className="hover:border-b-2 pb-1">
              <a href="#">About</a>
            </li>
            <li className="hover:border-b-2 pb-1">
              <a href="#">Careers</a>
            </li>
            <li className="hover:border-b-2 pb-1">
              <a href="#">Events</a>
            </li>
            <li className="hover:border-b-2 pb-1">
              <a href="#">Products</a>
            </li>
            <li className="hover:border-b-2 pb-1">
              <a href="#">Support</a>
            </li>
          </ul>
          <button className="md:hidden flex" onClick={toggleMenu}>
            <img className="my-1" src={hamburger} alt="" />
          </button>
        </nav>
        <h1 className="text-white font-thin text-5xl md:text-7xl w-auto md:w-2/5 border-2 uppercase mx-5 my-28 md:mx-40 md:my-10 border-white px-6 py-5 md:py-8 md:pl-12">
          Immersive experiences that deliver
        </h1>
      </div>
      {menuVisible && <Menu />}
    </>
  );
};

export default Hero;
