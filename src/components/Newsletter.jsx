import React from "react";
import Shapes from "../assets/btn_shapes.svg";

const Newsletter = () => {
  return (
    <div className="container py-[80px]">
      <div data-aos="fade-up" className="relative bg-[#666DFF] w-full py-[90px] px-[80px] text-white">
        <img src={Shapes} alt="shapes" width={88} className="absolute top-0 left-0" />
        <h2 className="section-title">NEWSLETTER</h2>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[35px] font-semibold">Subscribe our News Letter <br /> to get Latest Updates.</h2>
          </div>
          <div>
            <input type="text" placeholder="Paresh@Pixeto.com" className="bg-white text-black w-[464px] p-[20px]" />
          </div>
          <div className="w-[16px] h-[325px] absolute  right-[0px] top-0">
            <div className="w-[16px] h-[30%] bg-[#FFA155]"></div>
            <div className="w-[16px] h-[50%] bg-[#FFD3AF]"></div>
            <div className="w-[16px] h-[20%] bg-[#444CFC]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
