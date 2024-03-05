import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container  flex justify center lg:flex flex-col justify-center items-center mt-[150px] h-[100%] w-full tracking-wide">
        <h1 className="lg:flex flex-wrap mt-[150px] tracking-wide text-center text-5xl font-bold  font-sans-serif  text-gray-800 leading-snug">
          Create and Submit Assignments <br /> with Ease
        </h1>
        <p className="mt-4 lg:mt-8 text-xl text-gray-600 flex flex-wrap text-center">
          Our platform makes it easy for lecturers to create and manage
          assignments,
          <br />
          and for students to view and submit them.
        </p>
        <button className="flex justify-center items-center lg:border bg-[#18753D] text-white font-semi-normal rounded-full mb-40 px-10 py-4 mt-10">
          Request a Demo
        </button>
        <div className="flex flex-row w-full bg-[#fefefe]">
          <div className="flex gap-2">
            <img
              src="./src/assets/images/logo.png"
              alt=""
              className="mt-1 h-20"
            />
            <h1 className="mt-4 text-3xl font-medium">Kwarapoly</h1>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row   bg-[#fefefe] w-full h-[80vh] py-10">
        <div className="flex flex-col bg-[#ffffff] w-[400px] h-screen p-10">
          <div className="flex gap-2 ">
            <img
              src="./src/assets/images/logo.png"
              alt=""
              className="mt-1 h-20"
            />
            <h1 className="mt-4 text-3xl font-medium">Kwarapoly</h1>
          </div>
          <h1>Menu</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
