import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <main className="container flex-wrap lg:flex-nowrap w-full h-screen">
        <Header />
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
