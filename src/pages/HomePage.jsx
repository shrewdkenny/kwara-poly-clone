import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <main className=" flex-wrap lg:flex-nowrap w-full h-screen bg-[#F5F4F6]">
        <Header />
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
