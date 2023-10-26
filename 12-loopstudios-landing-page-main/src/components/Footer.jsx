import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center gap-8  md:justify-between bg-black md:px-40 py-20 text-white">
        <div className="flex flex-col gap-10">
          <img className="w-44 m-auto md:m-0" src={logo} alt="logo" />
          <ul className="flex flex-col md:flex-row gap-5">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="flex flex-col  gap-10">
          <ul className="flex justify-center md:justify-end  gap-5 w-fit m-auto md:m-0 md:w-auto">
            <a href="">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="">
              <img src={pinterestIcon} alt="" />
            </a>
            <a href="">
              <img src={instagramIcon} alt="" />
            </a>
          </ul>
          <p className="text-gray-400">
            © 2021 Loopstudios. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
