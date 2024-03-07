import React from "react";
import SideBarButtons from "../components/SideBarButtons";
import {
  FaBookOpen,
  FaComment,
  FaDoorOpen,
  FaHome,
  FaLongArrowAltUp,
  FaTools,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
const SideBar = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#ffffff] w-[20vw] justify-center items-center cursor-pointer h-[100%]">
        <div className="flex gap-2">
          <img src="./src/assets/images/logo.png" alt="" className=" h-7" />
          <h1 className=" text-xl font-medium">Kwarapoly</h1>
        </div>
        <div>
          <h1 className="mt-[40px] text-xl font-normal">Menu</h1>
          <SideBarButtons icon={<FaHome />} value="Overview" />
          <SideBarButtons icon={<FaBookOpen />} value="Assignments" />
          <SideBarButtons icon={<FaTools />} value="Notification" />
          <div className=" border-b-2 border-gray-300 mt-5"></div>
        </div>
        <div>
          <h1 className="mt-[40px] text-xl font-normal">Account</h1>
          <div className="relative flex flex-row">
            <SideBarButtons icon={<FaComment />} value="Messages" />
            <p className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center  absolute top-7 bottom-0 right-2 text-white text-sm">
              5
            </p>
          </div>
          <SideBarButtons icon={<FaTools />} value="Settings" />
        </div>
        <div className="bg-[#f0f7fe] flex flex-col justify-end h-[220px] w-[220px] items-center mt-44 rounded-xl relative">
          <div className="flex flex-col gap-2 mb-4">
            <h1 className="flex justify-center text-xl font-normal">Log out</h1>
            <button className="text-white bg-[#18753D] flex justify-center items-center py-5 px-16 h-5 rounded-lg">
              <CiLogout className="font-bold text-xl text-white" />
            </button>
          </div>
          <img
            src="./src/assets/images/logout.png"
            alt=""
            className="absolute  top-[-90px] bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
