import React from "react";

import Earth from "../assets/desktop/image-deep-earth.jpg";
import NightArcade from "../assets/desktop/image-night-arcade.jpg";
import SoccerTeamVR from "../assets/desktop/image-soccer-team.jpg";
import Grid from "../assets/desktop/image-grid.jpg";
import FromUp from "../assets/desktop/image-from-above.jpg";
import PocketBorealis from "../assets/desktop/image-pocket-borealis.jpg";
import Curiosity from "../assets/desktop/image-curiosity.jpg";
import Fisheye from "../assets/desktop/image-fisheye.jpg";

import earthMobile from "../assets/mobile/image-deep-earth.jpg";
import NightArcadeMobile from "../assets/mobile/image-night-arcade.jpg";
import SoccerTeamVRMobile from "../assets/mobile/image-soccer-team.jpg";
import GridMobile from "../assets/mobile/image-grid.jpg";
import FromUpMobile from "../assets/mobile/image-from-above.jpg";
import PocketBorealisMobile from "../assets/mobile/image-pocket-borealis.jpg";
import CuriosityMobile from "../assets/mobile/image-curiosity.jpg";
import FisheyeMobile from "../assets/mobile/image-fisheye.jpg";


const Creations = () => {
  return (
    <>
      <div>
        <div className="uppercase flex justify-between px-5 py-10 md:px-40 md:py-20 ">
          <h1 className="text-3xl md:text-5xl font-thin">Our creations</h1>
          <p className="hidden md:flex py-3 px-10 border-2 border-black font-bold tracking-widest hover:bg-black hover:text-white">
            see all
          </p>
        </div>
        <div className="grid  md:grid-cols-4 md:grid-rows-2 md:gap-8 gap-5 px-5 md:px-40 md:mb-32 ">
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:bg-gray-400 hover:opacity-50" src={Earth} alt="" />
            <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={earthMobile} alt="" />
            <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
              Deep earth
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={NightArcade} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={NightArcadeMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            Night arcade
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={SoccerTeamVR} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={SoccerTeamVRMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            Soccer team VR
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={Grid} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={GridMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            The <br /> grid
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={FromUp} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={FromUpMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            From up above VR
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={PocketBorealis} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={PocketBorealisMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            Pocket borealis
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={Curiosity} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={CuriosityMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            The curiosity
            </p>
          </a>
          <a className="relative" href="">
            <img className="hidden md:flex w-full hover:opacity-50" src={Fisheye} alt="" />
              <img className="flex md:hidden w-full brightness-50 hover:opacity-50" src={FisheyeMobile} alt="" />
              <p className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white uppercase text-3xl w-40 font-light tracking-wider">
            Make it fisheye
            </p>
          </a>
        </div>
        <p className="md:hidden flex py-2 px-8 w-fit m-auto mt-5 mb-10 border-2 border-black font-bold tracking-widest hover:bg-black hover:text-white">
            see all
          </p>
      </div>
    </>
  );
};

export default Creations;
