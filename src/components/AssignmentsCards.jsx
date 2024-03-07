import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import TopStudents from "./TopStudents";

const AssignmentsCards = () => {
  return (
    <div className="flex flex-row justify-between bg-[#ffffff] h-[90px] w-[370px] mt-5 rounded-lg p-2">
      <div className="p-5 bg-gray-300 rounded-lg flex  h-5 w-5 mt-3 ml-4"></div>
      <div className="flex flex-col mt-2">
        <h1 className="font-semibold font-sans-serif tracking-wider">
          CEC 424: Irrigation & Drainage
        </h1>
        <p className="text-sm text-gray-400">May 14, 08:30 PM</p>
      </div>
      <CiMenuKebab/>
    </div>
  );
};

export default AssignmentsCards;
