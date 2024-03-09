import React from "react";
import TopStudents from "./TopStudents";
import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import AssignmentsCards from "./AssignmentsCards";

const AssignmentDetails = () => {
  return (
    <div>
      <div className="flex flex-row px-7 justify-between gap-8 w-[100%] h-[100vh] ">
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
          <div className="flex flex-col rounded-lg w-[630px] bg-gray-200">
            <div className=" flex flex-col px-5 mt-2">
              <h1 className="font-sans-serif">Top Students</h1>
              <p className="text-gray-400 mt-3 text-sm">
                List of the students with the highest scores
              </p>
            </div>
            <div className="flex flex-wrap ml-3 mb-3 gap-2">
              <TopStudents
                emoji="🙍🏾‍♂️"
                name="Abubakar Quadri"
                matricNumber="HND/21/COM/FT/100"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨‍💼"
                name="Taiwo James"
                matricNumber="HND/21/COM/FT/150"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨‍💼"
                name="Ajikanbi Emmanuel"
                matricNumber="HND/21/COM/FT/460"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
                <TopStudents
                emoji="🙍🏾‍♂️"
                name="Abubakar Quadri"
                matricNumber="HND/21/COM/FT/100"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
              <TopStudents
                emoji="👨🏾‍🦲"
                name="Fawaz Abiola"
                matricNumber="HND/21/COM/FT/230"
                icon={<CiMenuKebab />}
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[130vh] flex flex-col gap-5 rounded-lg mt-4">
          <div className=" w-[100%] h-[50%] bg-gray-100 p-5 rounded-lg flex flex-col">
            <div className="flex flex-row justify-between">
              <h1 className="font-sans-serif">Latest Assignments</h1>
              <p className="bg-[#ffffff] px-4 py-1 border text-[14px] flex justify-center items-center rounded-xl font-sans-serif">
                See all
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <AssignmentsCards
                image="./src/assets/images/cec1.png"
                course=" CEC 424: Irrigation & Drainage"
                dateTime="May 14, 08:30 PM"
                icon={<CiMenuKebab />}
              />
              <AssignmentsCards
                image="./src/assets/images/cec2.png"
                course="CBS 411: Character Building"
                dateTime="May 18, 10:30 PM"
                icon={<CiMenuKebab />}
              />
              <AssignmentsCards
                image="./src/assets/images/cec3.png"
                course="CEC 406: Transportation Plan"
                dateTime="May 18, 10:30 PM"
                icon={<CiMenuKebab />}
              />
              <AssignmentsCards
                image="./src/assets/images/cec4.png"
                course="CEC 428: Engineering Manage..."
                dateTime="May 22, 10:30 PM"
                icon={<CiMenuKebab />}
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%] h-[40%] bg-white p-5 rounded-lg ">
            <div className="flex flex-row justify-between">
              <h1 className="font-sans-serif">Old Assignments</h1>
              <p className="bg-[#ffffff] px-4 py-1  text-xl flex justify-center items-center font-sans-serif">
                <HiOutlineDotsHorizontal />
              </p>
            </div>
            <div className="flex flex-col mt-7 w-[80%] gap-8">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl text-[#535358]">
                    Irrigation and Drainage
                  </h1>
                  <p className="text-[#1c1e24] font-semibold text-xl">75/100</p>
                </div>
                <div className="relative flex flex-col">
                  <input
                    type="range"
                    className="appearance-none w-full  bg-[#fef6ed] rounded-lg outline-none overflow-hidden h-[25px] mt-4"
                  />
                  <input
                    type="range"
                    className="appearance-none w-[250px] bg-[#f17f30] rounded-e-lg  outline-none overflow-hidden h-[25px] mt-4 absolute"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl text-[#535358]">Character building</h1>
                  <p className="text-[#1c1e24] font-semibold text-xl">65/100</p>
                </div>
                <div className="relative flex flex-col">
                  <input
                    type="range"
                    className="appearance-none w-full  bg-[#eff7fe] rounded-lg outline-none overflow-hidden h-[25px] mt-4"
                  />
                  <input
                    type="range"
                    className="appearance-none w-[180px] bg-[#0177fb] rounded-e-lg  outline-none overflow-hidden h-[25px] mt-4 absolute"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl text-[#535358]">
                    Transportation Planning
                  </h1>
                  <p className="text-[#1c1e24] font-semibold text-xl">30/100</p>
                </div>
                <div className="relative flex flex-col">
                  <input
                    type="range"
                    className="appearance-none w-full  bg-[#eff7fe] rounded-lg outline-none overflow-hidden h-[25px] mt-4"
                  />
                  <input
                    type="range"
                    className="appearance-none w-[100px] bg-[#7d88fc] rounded-e-lg  outline-none overflow-hidden h-[25px] mt-4 absolute"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl text-[#535358]">
                    Engineering Management
                  </h1>
                  <p className="text-[#1c1e24] font-semibold text-xl">20/100</p>
                </div>
                <div className="relative flex flex-col">
                  <input
                    type="range"
                    className="appearance-none w-full  bg-[#eff7fe] rounded-lg outline-none overflow-hidden h-[25px] mt-4"
                  />
                  <input
                    type="range"
                    className="appearance-none w-[80px] bg-[#ec5491] rounded-e-lg  outline-none overflow-hidden h-[25px] mt-4 absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
