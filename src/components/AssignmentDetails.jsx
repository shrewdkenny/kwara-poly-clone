import React from "react";
import TopStudents from "./TopStudents";

const AssignmentDetails = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 px-7">
        <div className=" flex flex-col gap-7">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col bg-white  h-[100px] w-[200px] mt-5 rounded-lg ">
              <h1 className="flex justify-center items-center mt-5">
                Total Assignment
              </h1>
              <h2 className=" mt-1 ml-9">20</h2>
            </div>
            <div className="flex flex-col bg-white h-[100px] w-[200px] mt-5 rounded-lg">
              <h1 className="flex justify-center items-center mt-5">
                Available Assignment
              </h1>
              <h2 className="mt-1 ml-5">10</h2>
            </div>
            <div className="flex flex-col bg-white  h-[100px] w-[200px] mt-5 rounded-lg">
              <h1 className="flex justify-center items-center mt-5">
                Completed Assignment
              </h1>
              <h2 className="mt-1 ml-4">5</h2>
            </div>
          </div>
          <TopStudents emoji=""/>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
