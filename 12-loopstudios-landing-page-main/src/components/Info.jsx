import React from "react";
import leaderImg from "../assets/mobile/image-interactive.jpg";

const Info = () => {
  return (
    <>
      <div className="relative text-center flex flex-col gap-5 px-7 py-10 md:px-60 mt-60 md:mt-80 md:mb-32">
        <img className="md:w-3/4" src={leaderImg} alt="img" />
        <div className="flex flex-col md:text-start gap-7 px-3 pt-5 md:px-24 md:py-20 bg-white md:absolute md:-bottom-10 md:right-10 md:w-5/12 md:h-4/6">
          <h1 className="text-3xl md:text-5xl uppercase font-light">
            The leader in interactive VR
          </h1>
          <p className="text-gray-400 font-bold">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
