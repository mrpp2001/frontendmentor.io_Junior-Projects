import React, { useState } from "react";
import profile_img from "../images/image-jeremy.png";
import data from "../data.json";
import TimeCard from "./TimeCard";

const Profile = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Daily");

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <>
      <section className="relative flex justify-center mb-[4.5rem]">
        <div className="h-30 sm:h-[400px] w-80 flex gap-5 sm:flex-col bg-[#5746EA] rounded-2xl p-7  ">
          <img
            className="w-20 sm:w-28 h-20 sm:h-28 sm:mb-9  rounded-full border-4 border-solid border-white"
            src={profile_img}
            alt="img"
          />
          <div className="flex flex-col justify-center sm:flex-none">
            <p className="text-sm sm:text-l text-gray-400 font-bold">
              Report for
            </p>
            <h1 className="text-gray-300 text-2xl sm:text-6xl">
              Jeremy Robson
            </h1>
          </div>
        </div>
        <div
          className="absolute bottom-[-58px] sm:bottom-[-170px]  sm:pt-8 
        w-80 sm:h-[180px] px-8 sm:px-10 pt-6 leading-5 bg-[#1D204B] rounded-b-2xl 
        flex justify-center sm:flex-col gap-9 sm:gap-0 -z-10"
        >
          <p
            className={`text-${
              selectedTimeframe === "Daily" ? "white" : "#7476B4"
            } text-xl sm:text-2xl pb-4 hover:text-white cursor-pointer`}
            onClick={() => handleTimeframeClick("Daily")}
          >
            Daily
          </p>
          <p
            className={`text-${
              selectedTimeframe === "Weekly" ? "white" : "#7476B4"
            } text-xl sm:text-2xl pb-4 hover:text-white cursor-pointer`}
            onClick={() => handleTimeframeClick("Weekly")}
          >
            Weekly
          </p>
          <p
            className={`text-${
              selectedTimeframe === "Monthly" ? "white" : "#7476B4"
            } text-xl sm:text-2xl pb-4 hover:text-white cursor-pointer`}
            onClick={() => handleTimeframeClick("Monthly")}
          >
            Monthly
          </p>
        </div>
      </section>

      {/* Render the TimeCard component with the selected timeframe and data */}
      <section className="grid sm:grid-cols-3 justify-center gap-24 sm:gap-8 sm:gap-y-[10.5rem] ">
        <TimeCard selectedTimeframe={selectedTimeframe} data={data} />
      </section>
    </>
  );
};

export default Profile;
