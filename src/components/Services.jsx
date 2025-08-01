import React from "react";
import Button from "./Button";
import Icon1 from "../assets/services1.png";
import Icon2 from "../assets/expertise2.png";
import Icon3 from "../assets/services3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesItems = [
    {
      icon: Icon1,
      name: "Technical support",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
    },
    {
      icon: Icon2,
      name: "Testing Management",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
    },
    {
      icon: Icon3,
      name: "Development",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
    },
  ];
  return (
    <div className="bg-[#FFE6D2] h-[120vh] flex justify-center items-center">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">Our Services</h2>
        <h3 className="text-[48px]/[56px] w-[777px] font-semibold mb-[30px]">
          We build software solutions that solve client's business challenges
        </h3>
        <Button name="Start a Project" />
        <div className="mt-[40px] flex items-center justify-between gap-[20px]">
          {servicesItems.map((item, index) => (
            <div key={index} className="bg-white p-[40px]">
              <div className="rounded-full bg-[#FFE6D2] w-[47px] h-[47px] flex items-center justify-center">
                <img src={item.icon} alt="icon" className="w-[24px] h-[24px]" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[16px] mt-[20px] font-semibold">
                  {item.name}
                </h3>
                <p className="text-[#5D5F6D] text-[16px]">{item.info}</p>
                <div className="flex items-center group transition-all duration-300 cursor-pointer">
                  <Link to={"#"} className="text-[#444CFC] text-[16px]">
                    Read more
                  </Link>
                  <FaArrowRightLong className="ml-[10px] text-[20px] group-hover:translate-x-2 transition duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
