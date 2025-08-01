import React from "react";
import Shapes from "../assets/process_shapes.png";
import Icon1 from "../assets/process1.png";
import Icon2 from "../assets/process2.png";
import Icon3 from "../assets/process3.png";
import Icon4 from "../assets/process4.png";
import Icon5 from "../assets/process5.png";
import Icon6 from "../assets/process6.png";

const Process = () => {
  const processItems = [
    {
      icon: Icon1,
      name: "Discover",
      number: "01",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
    {
      icon: Icon2,
      name: "Designing",
      number: "02",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
    {
      icon: Icon3,
      name: "Development",
      number: "03",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
    {
      icon: Icon4,
      name: "Testing",
      number: "04",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
    {
      icon: Icon5,
      name: "Deployment",
      number: "05",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
    {
      icon: Icon6,
      name: "Maintenance",
      number: "06",
      info: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    },
  ];
  return (
    <div className="container h-[110vh] flex justify-center items-center">
    <div data-aos="fade-up" className="relative">
      <h2 className="section-title">our process</h2>
      <h3 className="text-[#232536] text-[48px]/[56px] font-semibold">The process we are working <br /> With Our client Worldwide</h3>
      <p className="text-[16px] text-[#232536] w-[624px] my-[20px]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable.
      </p>
      <img src={Shapes} alt="shapes" className="absolute top-[30px] right-0" />
      <div className="grid grid-cols-3 gap-[40px] mt-[70px]">
        {processItems.map((item, index) => (
          <div key={index} className="relative border-1 border-[#2325362B] p-[30px] py-[20px] flex">
            <div className="rounded-full bg-[#FFD3AF2B] w-[45%] h-[47px] flex items-center justify-center">
                <img src={item.icon} alt="icon" className="w-[24px] h-[24px]" />
              </div>
            <div className="ml-[15px]">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-[#232536]">{item.info}</p>
            </div>
            <h3 className="absolute top-0 right-0 text-[#232536] p-[10px] text-[24px] font-semibold opacity-20">{item.number}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Process;
