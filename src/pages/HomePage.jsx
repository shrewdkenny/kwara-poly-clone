import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <main className=" flex-wrap lg:flex-nowrap w-full h-[420vh] bg-[#F5F4F6] scroll-smooth">
        <Header />
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
