import React from "react";
import shapes from "../assets/career_shapes.png";
import Careers from "../assets/Career_img.png";
import Works from "../components/Works";
import Culture from "../components/Culture";

const Career = () => {
  return (
    <>
      <div data-aos="fade-up" className="container text-center py-[60px]">
        <img src={shapes} alt="shapes" className="absolute right-0 top-[20px]" />
        <p className="text-[#232536]">CAREER AT FINSWEET</p>
        <h2 className="text-[48px]/[56px] font-semibold text-[#232536] my-[30px]">
          We hired people who are <br /> Always Passionate about <br /> what
          they do
        </h2>
        <p className="text-[16px]">
          Through True Rich Attended does no end it his mother since real had
          half <br />
          every him case in packages enquire we up ecstatic unsatiable saw .
        </p>
        <img src={Careers} alt="" className="px-[120px] py-[30px]" />
        <p className="text-[#232536] text-[18px] my-[30px]">
          See Our open positions{" "}
        </p>
      </div>
      <Works />
      <Culture />
    </>
  );
};

export default Career;
