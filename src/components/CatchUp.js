import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const CatchUp = () => {
  return (
    <div className="px-8 sm:px-12 md:px-16  h-[200px] ">
      <div className=" px-4 flex flex-col items-center justify-center  h-full ">
        <div className="text-3xl font-Lora text-[#B3BFC6]">Contact Me</div>
        <div className="flex  p-4 items-center justify-center space-x-8">
          <AiFillLinkedin className="h-8 w-8 cursor-pointer text-[#B3BFC6]" />
          <AiFillTwitterCircle className="h-8 w-8 cursor-pointer text-[#B3BFC6]" />
          <AiFillYoutube className="h-8 w-8 cursor-pointer text-[#B3BFC6]" />
        </div>
      </div>
    </div>
  );
};

export default CatchUp;
