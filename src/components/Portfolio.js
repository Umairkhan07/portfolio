/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

const Portfolio = () => {
  return (
    <section className="py-6 md:px-20 lg:px-40 px-8 mb-20">
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-[#B3BFC6]">
          Portofolio
        </h3>
        <p className="text-md py-2 leading-8 text-[#B6C2C9] dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and <br />
          collaborated with talanted people to create digital products for both
          business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-[#B6C2C9] dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover h-[100%] w-[100%]"
            width={"100%"}
            height={"100%"}
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1 h-[100%] w-[100%]">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover h-[100%] w-[100%]"
            width={"100%"}
            height={"100%"}
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover h-[100%] w-[100%]"
            width={"100%"}
            height={"100%"}
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover h-[100%] w-[100%]"
            width={"100%"}
            height={"100%"}
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1 ">
          <img
            className="rounded-lg object-cover h-[100%] w-[100%]"
            width={"100%"}
            height={"100%"}
            src={web6}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
