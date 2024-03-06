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

        {/* HERO SECTION 2 */}
        <div className=" flex flex-row w-[100vw] h-screen bg-[#fefefe] px-10">
          {/* Side Bar  */}
          <div className="flex flex-col bg-[#ffffff] mt-[70px] p-5 cursor-pointer h-[745px]">
            <div className="flex gap-2">
              <img src="./src/assets/images/logo.png" alt="" className=" h-7" />
              <h1 className=" text-xl font-medium">Kwarapoly</h1>
            </div>
            <h1 className="mt-20 font-normal">Menu</h1>
            <div className="flex flex-row justify-center items-center px-2 rounded-lg  text-[#aeaeb1] text-xl mt-5 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
              <FaHome />
              <p className="container">Overview</p>
            </div>
            <div className="flex flex-row justify-center items-center px-2 rounded-lg text-[#aeaeb1] text-xl mt-5 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
              <FaBookOpen />
              <p className="container">Assignments</p>
            </div>
            <div className="flex flex-row justify-center items-center px-2 rounded-lg text-[#aeaeb1] text-xl mt-5 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
              <FaBell />
              <p className="container">Notification</p>
            </div>
            <div className="border border-[#efefef] mt-10"></div>

            <h1 className="mt-10 font-normal">Account</h1>
            <div className="flex flex-row justify-center items-center px-2 rounded-lg  text-[#aeaeb1] text-xl mt-5 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
              <FaComment />
              <p className="container">Messages</p>
              <div className="p-2 text-sm text-white font-thin flex justify-center items-center bg-[#ef6530] rounded-full w-5 h-5">
                <p>5</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center px-2 rounded-lg  text-[#aeaeb1] text-xl mt-5 h-[54px] w-[200px] hover:bg-[#18753D] hover:text-white">
              <FaTools />
              <p className="container">Settings</p>
            </div>
          </div>

          <div>
            {/* Search section */}
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
                  <div
                    style={{
                      backgroundImage: "url('./src/assets/images/one.png')",
                    }}
                    className="text-5xl bg-cover bg-center bg-no-repeat flex h-10 w-10 items-center justify-center rounded-full bg-orange-300"
                  ></div>
                  <div className="flex flex-col">
                    <h1>Azeez Kehinde</h1>
                    <p className="text-gray-500">student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ASSIGNMENT 1 SECTION */}
            <div className="flex flex-row gap-[20px] w-full  h-[640px] bg-[#f5f5f7] mt-5">
              <div className="flex flex-col">
                <div className=" lg:px-5  flex flex-row h-auto mt-5">
                  <div className="hidden lg:flex flex-row gap-5">
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

                {/* TOP STUDENTS SECTION */}
                <div className="lg:flex flex-col mt-10 ml-5 bg-white rounded-lg h-[450px] p-8">
                  <div className=" flex flex-col">
                    <h1 className="font-sans-serif">Top Students</h1>
                    <p className="text-gray-400 mt-3 text-sm">
                      List of the students with the highest scores
                    </p>
                  </div>
                </div>
              </div>

              {/* ASSIGNMENTS SECTION */}
              <div className=" flex flex-col mt-10 mr-10 w-[400px]  h-[590px] bg-[#fdfdfd] rounded-lg px-5 py-5">
                <div className="flex flex-row justify-between">
                  <h1 className="font-sans-serif">Assignments</h1>
                  <p className="bg-[#ffffff] px-4 py-1 border text-[14px] flex justify-center items-center rounded-xl font-sans-serif">
                    See all
                  </p>
                </div>
                <div className="flex flex-row bg-[#ffffff] h-[80px] w-[100%] mt-5 rounded-lg">
                  deded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
