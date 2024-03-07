import React from "react";
import TopStudents from "./TopStudents";

const AssignmentDetails = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 px-7">
        <div className=" flex flex-col gap-7 w-[80%]">
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
          <div className="flex flex-wrap gap-6">
            <TopStudents
              emoji="🙍🏾‍♂️"
              name="Abubakar Quadri"
              matricNumber="HND/21/COM/FT/100"
            />
            <TopStudents
              emoji="👨‍💼"
              name="Taiwo James"
              matricNumber="HND/21/COM/FT/150"
            />
            <TopStudents
              emoji="👨🏾‍🦲"
              name="Fawaz Abiola"
              matricNumber="HND/21/COM/FT/230"
            />
            <TopStudents
              emoji="🤵🏽"
              name="Timileyin Ogunleye"
              matricNumber="HND/21/COM/FT/300"
            />
            <TopStudents
              emoji="👨‍💼"
              name="Ajikanbi Emmanuel"
              matricNumber="HND/21/COM/FT/460"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
            <TopStudents
              emoji="👨🏽‍🏫"
              name="Akinyooye Stephen"
              matricNumber="HND/21/COM/FT/760"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
