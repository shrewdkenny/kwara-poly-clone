import React from "react";
import SideBarButtons from "../components/SideBarButtons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBell,
  FaBookOpen,
  FaComment,
  FaCopyright,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaRegCopyright,
  FaSearch,
  FaStar,
  FaTools,
  FaTwitter,
} from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import SideBar from "../components/SideBar";
const OverView = () => {
  return (
    <div>
      <div className="h-[120vh] w-full flex flex-row  bg-[#fcfcfc]">
        <SideBar />
        <div className="flex flex-col  w-[100%]">
          <div className="hidden lg:flex flex-row justify-between px-5 mt-[42px] h-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="search or type"
                className="bg-[#f4f4f4] rounded-lg w-[350px] py-2 px-[50px] outline-none placeholder:text-xl "
              />
              <FaSearch className="absolute top-3 ml-2 text-xl text-gray-500 " />
            </div>
            <div className="flex flex-row gap-5 ">
              <TbMessage className="text-2xl" />

              <GoBell className="text-2xl" />
              <div className="flex flex-row">
                <div className="bg-gray-300 rounded-full flex justify-center items-center h-5 w-5">
                  🤵🏽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
