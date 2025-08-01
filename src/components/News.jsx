import React from "react";
import News1 from "../assets/News1.png";
import News2 from "../assets/News2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="bg-[#ECF8F9]">
      <div data-aos="fade-up" className="container py-[60px]">
        <div className="w-[16px] h-[16px] bg-[#444CFC] mb-[8px]"></div>
        <h2 className="text-[48px] text-[#232536] font-semibold mb-[20px]">Read our latest blogs & news</h2>
        <div className="flex justify-between items-center gap-[20px]">
          <div className="flex items-center bg-white w-[624px]">
            <div>
              <img src={News1} alt="news-1" />
            </div>
            <div className="pl-[30px]">
              <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
              <h3 className="text-[24px] font-semibold mb-[16px]">Today’s best design <br /> trends for digital <br /> products</h3>
              <div className="flex items-center group transition-all duration-300 cursor-pointer">
                <Link to={"#"} className="text-[#444CFC] text-[16px]">
                  Read more
                </Link>
                <FaArrowRightLong className="ml-[10px] text-[20px] group-hover:translate-x-2 transition duration-300" />
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white w-[624px]">
            <div>
              <img src={News2} alt="news-1" />
            </div>
            <div className="pl-[30px]">
              <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
              <h3 className="text-[24px] font-semibold mb-[16px]">A practical guide to <br /> building a brand strategy</h3>
              <div className="flex items-center group transition-all duration-300 cursor-pointer">
                <Link to={"#"} className="text-[#444CFC] text-[16px]">
                  Read more
                </Link>
                <FaArrowRightLong className="ml-[10px] text-[20px] group-hover:translate-x-2 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
