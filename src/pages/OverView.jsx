import React from "react";
import SideBar from "../components/SideBar";
import OverViewPageHeader from "../components/OverViewPageHeader";
const OverView = () => {
  return (
    <div>
      <div className="h-[120vh] w-full flex flex-row  bg-[#fcfcfc]">
        <SideBar />
        <div className="flex flex-col">
          <OverViewPageHeader />
        </div>
      </div>
    </div>
  );
};

export default OverView;
