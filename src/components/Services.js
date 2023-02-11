/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GoBrowser, GoDeviceMobile, GoDatabase } from "react-icons/go";
import { AiFillCloud, AiFillApi } from "react-icons/ai";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 py-20 space-y-8 ">
      <div className="w-full lg:max-w-[1500px] flex flex-col items-center justify-start md:items-start md:justify-start  space-y-2 px-4">
        <div className="text-[#B6C2C9] text-2xl md:ml-16">WHAT I DO</div>
        <div className="text-[#B6C2C9] md:ml-16">
          Things I'm skilled at and passionate about.
        </div>
      </div>
      <div className="w-full max-w-[1500px] px-4 flex flex-col md:flex-row items-center justify-center py-3 ">
        <div class="p-4 w-full lg:w-1/4 flex flex-col text-center items-center ">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <GoBrowser className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3  ">
              Web Application Development
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              Fast, responsive and engaging apps that bring your ideas to life.
            </p>
          </div>
        </div>{" "}
        <div class="p-4 w-full lg:w-1/4  flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <GoDeviceMobile className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3 ">
              Mobile Application Developement
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              Cross-platform apps built with efficiency and speed for Android
              and iOS.
            </p>
          </div>
        </div>{" "}
        <div class="p-4 w-full lg:w-1/4 flex flex-col text-center items-center ">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <AiFillApi className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3 ">
              API Development
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              REST APIs that are tailored to your needs, follow best performance
              and security.
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="w-full max-w-[1500px] px-4 flex flex-col md:flex-row items-center justify-center py-3 text-[#B6C3C9]">
        <div class="p-4 w-full lg:w-1/4 flex flex-col text-center items-center ">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <GoBrowser className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3 ">
              Third-Party API Integration
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              Integration with any third-party API of your choice. Extend the
              functionality of your apps with the least amount of effort.
            </p>
          </div>
        </div>{" "}
        <div class="p-4 w-full lg:w-1/4  flex flex-col text-center items-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <GoDatabase className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3 ">
              Database Design
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              Proper Database design for effective Web & Mobile development,
              always aiming for performance, scale and stability.
            </p>
          </div>
        </div>{" "}
        <div class="p-4 w-full lg:w-1/4 flex flex-col text-center items-center ">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <AiFillCloud className="h-11 w-80" />
          </div>
          <div class="flex-grow">
            <h2 class="text-[#B6C2C9] text-lg title-font font-medium mb-3 ">
              Cloud Integration
            </h2>
            <p class="leading-relaxed text-base text-[#B3BFC6]">
              Deployment and maintenance of your apps in a wide range of Cloud
              Services, from fully managed to highly customizable VPS.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Services;
