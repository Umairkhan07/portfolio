import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[60px] bg-[#394246] ">
      <div className="w-full lg:max-w-[1500px] flex items-center justify-center px-4 sm:px-8">
        <div className="w-full flex justify-between text-[#B3BFC6]">
          <div className="text-3xl  flex items-center justify-center">
            <h1 className="font-Sacramento"> umairkhan</h1>
          </div>
          <div className="flex flex-row ">
            <div className="text-black w-[150px]  flex items-center justify-center">
              <div className=" flex items-center rounded-lg justify-center w-[150px] h-[25px]  bg-[#B6C3C9]">
                <h1>Download Resume</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
