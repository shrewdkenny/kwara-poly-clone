import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import TopStudents from "./TopStudents";

const AssignmentsCards = ({ image, course, dateTime, icon }) => {
  return (
    <div className="flex flex-row  bg-[#ffffff] h-[90px] w-[100%] mt-5 rounded-lg justify-between items-center px-2">
      <img
        src={ image }
        alt=""
        className="h-14 rounded-lg flex justify-center items-center m-2"
      />
      <div className="flex flex-col mt-2">
        <h1 className="font-semibold font-sans-serif tracking-wider">
          {course}
        </h1>
        <p className="text-sm text-gray-400">{dateTime}</p>
      </div>
      <div className="text-3xl">
        {icon}
      </div>

      {/* <img
        src="./src/assets/images/cec1.png"
        alt=""
        className="h-14 rounded-lg flex justify-center items-center m-2"
      />
      <div className="flex flex-col mt-2">
        <h1 className="font-semibold font-sans-serif tracking-wider">
          CEC 424: Irrigation & Drainage
        </h1>
        <p className="text-sm text-gray-400">May 14, 08:30 PM</p>
      </div>
      <div className="text-3xl">
        <CiMenuKebab />
      </div> */}
    </div>
  );
};

export default AssignmentsCards;
