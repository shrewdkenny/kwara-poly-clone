import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { GoBell } from "react-icons/go";
const OverViewPageHeader = () => {
  return (
    <div>
      
        <div className="hidden lg:flex flex-row justify-between px-7 mt-[42px] h-auto w-[80vw]">
          <div className="relative">
            <input
              type="text"
              placeholder="search or type"
              className="bg-[#f4f4f4] rounded-lg w-[350px] py-2 px-[50px] outline-none placeholder:text-xl "
            />
            <FaSearch className="absolute top-3 ml-2 text-xl text-gray-500 " />
          </div>
          <div className="flex flex-row gap-10 justify-center items-center ">
            <div className="relative">
              <TbMessage className="text-2xl" />
              <div className="w-2 h-2 bg-orange-500 rounded-full flex justify-center items-center  absolute top-[1px] bottom-0 left-4"></div>
            </div>
            <div className="relative">
              <GoBell className="text-2xl" />
              <div className="w-2 h-2 bg-orange-500 rounded-full flex justify-center items-center  absolute top-[-2px] bottom-0 left-3"></div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="bg-orange-300 object-cover rounded-full flex justify-center items-center bg-cover">
                <img src="./src/assets/images/avatar.png" alt="" />
              </div>
              <div className="leading-4 flex flex-col">
                <h1 className="text-lg font-normal font-sans">
                  Abubakar Qoreebullah
                </h1>
                <p className="text-gray-400">Student</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default OverViewPageHeader;
