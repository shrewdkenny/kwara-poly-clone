import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const TopStudents = ({ emoji, name, matricNumber }) => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#ffffff] h-[80px] w-[300px] mt-5 rounded-lg p-2">
        <div className="p-5 bg-gray-300 rounded-full flex justify-center items-center h-5 w-5 mt-3 ml-4">
          {emoji}
        </div>
        <div className="flex flex-col mt-2">
          <h1 className="font-semibold font-sans-serif tracking-wider">
            {name}
          </h1>
          <p className="text-sm text-gray-400">{matricNumber}</p>
        </div>
       
      </div>
    </div>
  );
};

export default TopStudents;
