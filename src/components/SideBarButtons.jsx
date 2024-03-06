import React from "react";
import { FaHome } from "react-icons/fa";

const SideBarButtons = ({ icon, value }) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center px-2 rounded-lg  text-[#aeaeb1] text-xl mt-4 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
        <div>{icon}</div>
        <p className="container">{value}</p>
      </div>
    </div>
  );
};

export default SideBarButtons;
