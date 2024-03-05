import React from "react";
import { FaTimes } from "react-icons/fa";

const Hero = () => {
  return (
    <>
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

        {/* After Demo Button  */}

        <div className="container flex flex-row w-full h-[80vh]  bg-[#fefefe]">
          <div className="flex flex-col bg-[#ffffff] mt-20 w-[250px] p-5">
            <div className="flex gap-2">
              <img src="./src/assets/images/logo.png" alt="" className=" h-7" />
              <h1 className=" text-xl font-medium">Kwarapoly</h1>
            </div>
            <h1 className="mt-20">Menu</h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mt-20  ">
              <input type="text" placeholder="search or type" />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
