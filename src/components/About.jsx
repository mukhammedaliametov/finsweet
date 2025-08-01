import React from "react";
import Image1 from "../assets/Image 1.png";
import Image2 from "../assets/Image 2.png";
import Image3 from "../assets/Image 3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div data-aos="fade-up" className="container pt-[70px]">
      <h2 className="section-title">
        About Us
      </h2>
      <div className="flex items-center justify-between mb-[30px]">
        <div>
          <h3 className="text-[#232536] text-[48px] font-semibold text-[48px]/[56px] w-[648px]">
            The company leads entire <br /> webdesign process from <br />{" "}
            concept to delivery.
          </h3>
        </div>
        <div className="w-[450px]">
          <h3 className="text-[#232536] text-[36px] font-semibold">
            The Era Of Technology.
          </h3>
          <p className="text-[#5D5F6D] text-[16px] mt-[10px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[15px]">
        <img src={Image1} alt="img_1" className="w-[390px]" />
        <img src={Image2} alt="img_2" className="w-[390px]" />
        <img src={Image3} alt="img_3" className="w-[380px]" />
        <div className="w-[18px] h-[424px] ml-[-15px]">
            <div className="w-[18px] h-[25%] bg-[#FFA155]"></div>
            <div className="w-[18px] h-[50%] bg-[#FFD3AF]"></div>
            <div className="w-[18px] h-[25%] bg-[#444CFC]"></div>
        </div>
      </div>
      <div className="flex items-center justify-between my-[30px]">
        <div className="flex items-center gap-[60px] mb-[20px]">
          <div>
            <h3 className="text-[36px] font-semibold text-[#232536]">1560+</h3>
            <div className="w-[72px] h-[6px] flex items-center">
                <div className="w-[20%] h-[6px] bg-[#444CFC]"></div>
                <div className="w-[50%] h-[6px] bg-[#FFD3AF]"></div>
                <div className="w-[30%] h-[6px] bg-[#FFA155]"></div>
            </div>
            <p className="mt-2">Project Delivered</p>
          </div>
          <div>
            <h3 className="text-[36px] font-semibold text-[#232536]">100+</h3>
            <div className="w-[72px] h-[6px] flex items-center">
                <div className="w-[20%] h-[6px] bg-[#444CFC]"></div>
                <div className="w-[50%] h-[6px] bg-[#FFD3AF]"></div>
                <div className="w-[30%] h-[6px] bg-[#FFA155]"></div>
            </div>
            <p className="mt-2">Professional</p>
          </div>
          <div>
            <h3 className="text-[36px] font-semibold text-[#232536]">950+</h3>
            <div className="w-[72px] h-[6px] flex items-center">
                <div className="w-[20%] h-[6px] bg-[#444CFC]"></div>
                <div className="w-[50%] h-[6px] bg-[#FFD3AF]"></div>
                <div className="w-[30%] h-[6px] bg-[#FFA155]"></div>
            </div>
            <p className="mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-[36px] font-semibold text-[#232536]">10 yrs</h3>
            <div className="w-[72px] h-[6px] flex items-center">
                <div className="w-[20%] h-[6px] bg-[#444CFC]"></div>
                <div className="w-[50%] h-[6px] bg-[#FFD3AF]"></div>
                <div className="w-[30%] h-[6px] bg-[#FFA155]"></div>
            </div>
            <p className="mt-2">Experience</p>
          </div>
        </div>
        <div className="flex items-center group transition-all duration-300 cursor-pointer">
          <Link to={"#"} className="text-[#444CFC] text-[16px]">
            Read about us 
          </Link>
          <FaArrowRightLong className="ml-[10px] text-[20px] group-hover:translate-x-2 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default About;
