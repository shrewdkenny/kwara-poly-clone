import React from "react";
import SideBar from "../components/SideBar";
import OverViewPageHeader from "../components/OverViewPageHeader";
import AssignmentDetails from "../components/AssignmentDetails";
const OverView = () => {
  return (
    <div>
      <div className="h-[142vh] w-[100vw] flex flex-row bg-[#fcfcfc]">
        <SideBar />
        <div className="flex flex-col">
          <OverViewPageHeader />
          <AssignmentDetails />
        </div>
      </div>
    </div>
  );
};

export default OverView;
