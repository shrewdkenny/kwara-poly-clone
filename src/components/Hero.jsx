import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="justify center  lg:flex flex-col justify-center items-center mt-[150px] w-full tracking-wide">
        <h1 className="items-center lg:text-5xl font-semibold font-sans-serif  break-words text-gray-800 ">
          Create and Submit Assignments
          <span className="lg:ml-2 lg:flex justify-center mt-2">with Ease</span>
        </h1>
        <p className="lg:mt-8 text-xl text-gray-600">
          Our platform makes it easy for lecturers to create and manage
          assignments,
          <span className="lg:flex flex-row justify-center mt-1">
            and for students to view and submit them.
          </span>
        </p>
        <button className="lg:border bg-[#18753D] text-white font-semi-normal rounded-full px-10 py-4 mt-5">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
