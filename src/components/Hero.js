import React from "react";
import img from "../assets/img.png";
const Hero = () => {
  return (
    <div className="flex  flex-col items-center justify-center h-[500px] ">
      <div className="w-full lg:max-w-[900px] h-[300px] flex items-center justify-center px-4 sm:px-8 ">
        <div className="flex items-start justify-center rounded-full  w-60 h-60   overflow-hidden ">
          <img
            src={img}
            alt=""
            className="object-cover h-[430px] w-full p-10 bg-[#555A5E]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1 px-4 ">
        <div className="font-Yanone">
          <h1 className=" text-2xl font-Lora text-[#B6C2C9]">
            Muhammad Umair Khan
          </h1>
        </div>
        <div>
          <h1 className="text-[#B6C2C9] ">MERN STACK DEVELOPER</h1>
        </div>
        <div className="text-[#B3BFC6] flex flex-col sm:flex-row items-center justify-center sm:space-x-1">
          <h1 className=""> Javascript | React Js | </h1>
          <h1 className=""> Node Js | Express Js</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
