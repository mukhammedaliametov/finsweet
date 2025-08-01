import React from "react";
import Img1 from "../assets/expertise1.png";
import Img2 from "../assets/expertise2.png";
import Img3 from "../assets/expertise3.png";

const Expertise = () => {
  const expertiseItems = [
    {
      icon: Img1,
      name: "On Time Delivery",
      info: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
    {
      icon: Img2,
      name: "Best Quality",
      info: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
    {
      icon: Img3,
      name: "Support Assist",
      info: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
  ];
  return (
    <div className="bg-[#ECF8F9] h-[100vh] flex justify-center items-center">
      <div data-aos="fade-up" className="container flex items-center justify-between">
        <div className="w-[624px]">
          <h2 className="section-title">Our Expertise</h2>
          <h3 className="text-[48px]/[56px] font-semibold text-[#232536]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h3>
          <p className="text-[16px] text-[#5D5F6D] mt-[20px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.{" "}
          </p>
        </div>
        <div className="w-[515px] flex flex-col gap-[10px]">
            <div className="w-[16px] h-[16px] bg-[#444CFC] mb-[-10px]"></div>
          {expertiseItems.map((item, index) => (
            <div key={index} className="bg-white p-[30px] flex items-top">
              <div className="rounded-full bg-[#FFE6D2] w-[77px] h-[47px] flex items-center justify-center">
                <img src={item.icon} alt="icon" className="w-[24px] h-[24px]" />
              </div>
              <div className="ml-[15px]">
                <h3 className="text-[16px] font-semibold mb-[5px]">{item.name}</h3>
                <p className="text-[#5D5F6D] text-[14px]">{item.info}</p>
              </div>
            </div>
          ))}
            <div className="w-[515px] h-[8px] flex items-center mt-[-10px]">
                <div className="w-[25%] h-[8px] bg-[#FFA155]"></div>
                <div className="w-[50%] h-[8px] bg-[#FFD3AF]"></div>
                <div className="w-[25%] h-[8px] bg-[#444CFC]"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
