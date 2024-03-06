import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <main className=" flex-wrap lg:flex-nowrap w-full h-[300vh] bg-[#F5F4F6]">
        <Header />
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
