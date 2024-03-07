import React from "react";
import {
  FaBell,
  FaBookOpen,
  FaComment,
  FaEnvelope,
  FaHome,
  FaSearch,
  FaTools,
} from "react-icons/fa";

import TopStudents from "./TopStudents";
import SideBarButtons from "./SideBarButtons";
import AssignmentsCards from "./AssignmentsCards";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION 1 */}
      <div className="container flex justify center lg:flex flex-col justify-center items-center mt-[150px]  w-full tracking-wide">
        <h1 className="lg:flex flex-wrap mt-[150px] tracking-wide text-center text-5xl font-bold  font-sans-serif  text-gray-800 leading-snug">
          Create and Submit Assignments <br /> with Ease
        </h1>
        <p className="mt-4 lg:mt-8 text-xl text-gray-600 flex flex-wrap text-center">
          Our platform makes it easy for lecturers to create and manage
          assignments,
          <br />
          and for students to view and submit them.
        </p>
        <button className="flex justify-center items-center lg:border bg-[#18753D] text-white font-semi-normal rounded-full mb-20 px-10 py-4 mt-10">
          Request a Demo
        </button>
        <div className="flex flex-row justify-center">
          <img src="./src/assets/images/heroimage.png" alt="" />
        </div>

        {/* <div className=" flex flex-row w-[100vw] h-screen bg-[#fefefe] px-5">
        

          <div className="flex flex-col bg-[#ffffff] mt-[70px] p-5 cursor-pointer h-[745px] py-10">
            <div className="flex gap-2">
              <img src="./src/assets/images/logo.png" alt="" className=" h-7" />
              <h1 className=" text-xl font-medium">Kwarapoly</h1>
            </div>
            <div>
              <h1 className="mt-[50px] font-normal">Menu</h1>
              <SideBarButtons icon={<FaHome />} value="Overview" />
              <SideBarButtons icon={<FaBookOpen />} value="Assignments" />
              <SideBarButtons icon={<FaTools />} value="Notification" />
              <div className=" border-b-2 border-gray-300 mt-5"></div>
            </div>
            <div>
              <h1 className="mt-[50px] font-normal">Account</h1>
              <div className="relative flex flex-row">
                <SideBarButtons icon={<FaComment />} value="Messages" />
                <p className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center  absolute top-7 bottom-0 right-2 text-white text-sm">
                  5
                </p>
              </div>
              <SideBarButtons icon={<FaTools />} value="Settings" />
            </div>
          </div>

          <div>
           
            <div className="hidden lg:flex flex-row justify-between px-5 mt-[120px] h-auto ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search or type"
                  className="bg-[#f4f4f4] rounded-lg w-[350px]  py-1 px-[50px] outline-none placeholder:text-2xl"
                />
                <FaSearch className="absolute top-2 ml-2 text-2xl  text-gray-500 " />
              </div>
              <div className="flex flex-row gap-10  mr-20">
                <FaEnvelope className="text-2xl" />
                <FaBell className="text-2xl" />
                <div className="flex flex-row gap-5">
                  <div className="p-5 bg-gray-300 rounded-full flex justify-center items-center h-5 w-5">
                    🤵🏽
                  </div>
                  <div className="flex flex-col">
                    <h1>Azeez Kehinde</h1>
                    <p className="text-gray-500">student</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[20px] h-[640px] bg-[#f5f5f7] mt-5">
              <div className="flex flex-col">
                <div className="hidden lg:flex flex-row justify-evenly mt-5">
                  <div className="container flex flex-row gap-5 ">
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
                </div>

                
                <div className="lg: flex flex-col mt-10  bg-[#fcfcfcfc] rounded-lg h-[450px] p-8 m-5">
                  <div className=" flex flex-col">
                    <h1 className="font-sans-serif">Top Students</h1>
                    <p className="text-gray-400 mt-3 text-sm">
                      List of the students with the highest scores
                    </p>
                  </div>

                  <div className=" flex flex-wrap gap-2">
                   
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
                  </div>
                </div>
              </div>

            
              <div className=" flex flex-col mt-10  w-[500px]  h-[590px] bg-[#fdfdfd] rounded-lg px-5 py-5">
                <div className="flex flex-row justify-between">
                  <h1 className="font-sans-serif">Assignments</h1>
                  <p className="bg-[#ffffff] px-4 py-1 border text-[14px] flex justify-center items-center rounded-xl font-sans-serif">
                    See all
                  </p>
                </div>

                <AssignmentsCards />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
