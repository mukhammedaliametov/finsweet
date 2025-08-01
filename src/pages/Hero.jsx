import React from "react";
import HeroImg from "../assets/hero_img.png";
import Logo1 from "../assets/hero_logo1.png";
import Logo2 from "../assets/hero_logo2.png";
import Logo3 from "../assets/hero_logo3.png";
import Logo4 from "../assets/hero_logo4.png";
import Logo5 from "../assets/hero_logo5.png";
import Button from "../components/Button";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Process from "../components/Process";
import Customers from "../components/Customers";
import News from "../components/News";

const Hero = () => {
  return (
    <>
      <div className="bg-[#232536] text-white">
        <div className="container w-full">
          <div data-aos="fade-up" className="flex justify-between items-center gap-[40px] py-[30px]">
            <div className="">
              <div className="block w-[24px] h-[24px] bg-[#303242] mb-[30px]"></div>
              <div>
                <h1 className="text-[50px] text-[50px]/[65px] font-medium">
                  Transform Your Idea <br /> Into Reality with <br /> Finsweet
                </h1>
                <p className="text-[16px] my-[20px] opacity-60">
                  The entire Finsweet team knows what's good with Webflow and{" "}
                  <br /> you can too with 1 week and a good attitude.
                </p>
                <Button name="Request Quote" />
              </div>
            </div>
            <div className="w-[463px] flex relative">
              <div className="w-[15px] h-[90px] absolute left-[-15px] bottom-0">
                <div className="w-[15px] h-[20%] bg-[#FFA155]"></div>
                <div className="w-[15px] h-[60%] bg-[#FFD3AF]"></div>
                <div className="w-[15px] h-[20%] bg-[#444CFC]"></div>
              </div>
              <img src={HeroImg} alt="hero-img" />
              <div className="w-[20px] h-[222px]">
                <div className="w-[20px] h-[30%] bg-[#FFA155]"></div>
                <div className="w-[20px] h-[50%] bg-[#FFD3AF]"></div>
                <div className="w-[20px] h-[20%] bg-[#444CFC]"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-[30px]">
            <div>
              <p className="opacity-60 text-[14px]">Our Clients</p>
              <h3>We've Worked with</h3>
            </div>
            <img src={Logo1} alt="hero_logo_1" />
            <img src={Logo2} alt="hero_logo_2" />
            <img src={Logo3} alt="hero_logo_3" />
            <img src={Logo4} alt="hero_logo_4" />
            <img src={Logo5} alt="hero_logo_5" className="mr-[-25px]" />
          </div>
        </div>
      </div>
      <About />
      <Expertise />
      <Services />
      <Process />
      <Customers />
      <News />
    </>
  );
};

export default Hero;
