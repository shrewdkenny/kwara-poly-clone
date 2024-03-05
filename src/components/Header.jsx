import React from "react";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-row mt-2 space-x-4  ">
          <img src="./src/assets/images/logo.png" alt="" className="mt-3" />
          <h1 className="mt-5 text-4xl font-medium tracking-wide text-gray-900 ">
            Kwarapoly
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
