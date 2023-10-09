import React from "react";
import exercise from "../images/icon-exercise.svg";
import play from "../images/icon-play.svg";
import selfCare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import work from "../images/icon-work.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const TimeCard = ({ selectedTimeframe }) => {
  // Filter the data based on the selected timeframe
  const record = data.find((record) => {
    switch (selectedTimeframe) {
      case "Daily":
        return record.timeframes && record.timeframes.daily;
      case "Weekly":
        return record.timeframes && record.timeframes.weekly;
      case "Monthly":
        return record.timeframes && record.timeframes.monthly;
      default:
        return false;
    }
  });

  if (!record) {
    return null; // If no record is found, don't render the card
  }
  return (
    <>
      {data &&
        data.map((record) => {
          // Get the image source based on the title
          let imageSrc = null;

          switch (record.title) {
            case "Work":
              imageSrc = work;
              break;
            case "Exercise":
              imageSrc = exercise;
              break;
            case "Play":
              imageSrc = play;
              break;
            case "Self Care":
              imageSrc = selfCare;
              break;
            case "Social":
              imageSrc = social;
              break;
            case "Study":
              imageSrc = study;
              break;
            default:
              break;
          }

          // Define colors based on the title
          let backgroundColor = "";
          switch (record.title) {
            case "Work":
              backgroundColor = "hsl(15, 100%, 70%)"; // Light red
              break;
            case "Exercise":
              backgroundColor = "hsl(145, 58%, 55%)"; // Lime green
              break;
            case "Play":
              backgroundColor = "hsl(195, 74%, 62%)"; // Soft blue
              break;
            case "Study":
              backgroundColor = "hsl(348, 100%, 68%)"; // Light red
              break;
            case "Social":
              backgroundColor = "hsl(264, 64%, 52%)"; // Violet
              break;
            case "Self Care":
              backgroundColor = "hsl(43, 84%, 65%)"; // Soft orange
              break;
            default:
              backgroundColor = ""; // Default color
              break;
          }

          let currentHours = 0;
          let previousHours = 0;

          if (record.timeframes) {
            switch (selectedTimeframe) {
              case "Daily":
                currentHours = record.timeframes.daily.current;
                previousHours = record.timeframes.daily.previous;
                break;
              case "Weekly":
                currentHours = record.timeframes.weekly.current;
                previousHours = record.timeframes.weekly.previous;
                break;
              case "Monthly":
                currentHours = record.timeframes.monthly.current;
                previousHours = record.timeframes.monthly.previous;
                break;
              default:
                break;
            }
          }

          return (
            <main key={record.title} className="relative">
              <div
                style={{ backgroundColor }}
                className="w-80 rounded-t-2xl flex justify-end relative 
                overflow-hidden"
              >
                <img
                  className="pr-5 relative top-[-10px]"
                  src={imageSrc}
                  alt={record.title}
                />
              </div>
              <div className=" bg-[#1D204B] w-80 h-30 sm:h-[240px] rounded-2xl 
               absolute z-10 top-11">
                <div className="flex justify-between px-6 sm:px-10 pt-6 pb-1 sm:py-8 items-center">
                  <p className="text-white font-bold sm:text-xl">{record.title}</p>
                  <img className="w-5.5 h-1" src={ellipsis} alt="" />
                </div>
                <div className="pb-6 px-6 sm:px-10 flex justify-between sm:flex-col gap-3">
                  <p className="text-3xl sm:text-7xl text-white">{currentHours}hrs</p>
                  <p className="text-gray-400 py-2">
                    Last Week - {previousHours}hrs
                  </p>
                </div>
              </div>
            </main>
          );
        })}
    </>
  );
};

export default TimeCard;
