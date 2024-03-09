import React from "react";
const TopStudents = ({ emoji, name, matricNumber, icon }) => {
  return (
    <div>
      <div className="flex flex-row gap-5 bg-[#ffffff] h-[80px] w-[300px] mt-5 rounded-lg p-2">
        <div className="p-5 bg-gray-300 rounded-full flex justify-center items-center h-5 w-5 mt-3 ml-4">
          {emoji}
        </div>
        <div className="flex flex-col mt-2">
          <h1 className="font-semibold font-sans-serif tracking-wider">
            {name}
          </h1>
          <p className="text-sm text-gray-400">{matricNumber}</p>
        </div>
        <div className="flex justify-center items-center text-3xl">{icon}</div>
      </div>
    </div>
  );
};

export default TopStudents;
