import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import TopStudents from "./TopStudents";

const AssignmentsCards = () => {
  return (
    <div className="flex flex-row gap-2 bg-[#ffffff] h-[90px] w-[370px] mt-5 rounded-lg justify-between items-center">
      <img
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
      <CiMenuKebab className="text-2xl" />

      {/* <div className="flex flex-row mt-2  bg-[#fdfdfd] rounded-lg px-5 py-5 gap-2 w-[100%] justify-between">
              <div>
                <img src="./src/assets/images/cec1.png" alt="" className="h-[70px] w-20 rounded-lg" />
              </div>
              <div>
                <h1 className="font-semibold font-sans-serif tracking-wider w-[270px]">
                  CEC 424: Irrigation & Drainage
                </h1>
                <p className="text-sm text-gray-400">May 14, 08:30 PM</p>
              </div>
              <CiMenuKebab className=" text-xl font-bold h-10"/>
            </div> */}
    </div>
  );
};

export default AssignmentsCards;
