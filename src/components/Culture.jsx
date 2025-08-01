import React from "react";
import culture1 from "../assets/culture1.png";
import culture2 from "../assets/culture2.png";
import culture3 from "../assets/culture3.png";
import culture4 from "../assets/culture4.png";
import culture5 from "../assets/culture5.png";
import culture6 from "../assets/culture6.png";

const Culture = () => {
  const cultureItems = [
    {
      icon: culture1,
      name: "Covid-19 insurance",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      icon: culture2,
      name: "Flexible working time",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      icon: culture3,
      name: "Work from home",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      icon: culture4,
      name: "Annual retreats",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      icon: culture5,
      name: "Learning stipend",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      icon: culture6,
      name: "Gym membership",
      info: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
  ];
  return (
    <div className="bg-[#FAFAFC] mt-[50px] py-[70px]">
    <div data-aos="fade-up" className="container">
      <h2 className="section-title ">Our Work & Culture </h2>
      <h3 className="text-[32px] font-semibold">Come and join a team of highly <br /> skilled professionals.</h3>
      <p className="text-[#232536] opacity-60 my-[20px]">
        Through True Rich Attended does no end it his mother since real had half <br />
        every him case in packages enquire we up ecstatic unsatiable saw his <br />
        giving Remain expense you position concluded.{" "}
      </p>
      <div className="grid grid-cols-3 gap-[10px] mt-[50px]">
        {cultureItems.map((item, index) => (
          <div className="bg-white p-[30px]" key={index}>
            <div className="bg-[#FFD3AF80] rounded-full w-[39px] h-[40px] flex justify-center items-center">
              <img src={item.icon} className="w-[20px]" alt="img" />
            </div>
            <h3 className="py-[10px] font-semibold">{item.name}</h3>
            <p className="text-[14px] text-[#232536] opacity-60">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Culture;
