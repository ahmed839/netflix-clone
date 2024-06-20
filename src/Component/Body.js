import React from "react";
import Header from "./Header";
import Login from "./Login";

const Body = () => {
  return (
    <div className="relative bg-hero-pattern bg-cover h-screen">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <Header />
        <Login />
      </div>
    </div>
  );
};

export default Body;
