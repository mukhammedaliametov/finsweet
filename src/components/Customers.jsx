import React from "react";
import Customer1 from "../assets/Customer1.png";
import Customer2 from "../assets/Customer2.png";
import Customer3 from "../assets/Customer3.png";
import customerLogo from "../assets/customer_logo.png";
import Quote from '../assets/quote.png';

const Customers = () => {
  return (
    <div className="bg-[#F9F9FF] h-[90vh] flex items-center justify-center">
      <div data-aos="fade-up" className="container flex items-center justify-between">
        <div className="">
          <div className="w-[16px] h-[16px] bg-[#444CFC] mb-[20px]"></div>
          <div className="text-[#232536] w-[502px]">
            <h3 className="text-[48px]/[56px] font-semibold">
              Our customers love what we do
            </h3>
            <p className="text-[18px] font-normal py-[10px]">
              Transform your idea into reality with finsweet
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <div className="flex items-center mt-[30px]">
              <img src={Customer1} alt="customer-1" />
              <img src={Customer2} alt="customer-2" />
              <img src={Customer3} alt="customer-3" />
            </div>
            <p className="mt-[16px] font-semibold">
              <span className="font-bold">30+</span> Customer Reviews
            </p>
          </div>
        </div>
          <div className="w-[16px] h-[325px] relative right-[-28px]">
            <div className="w-[16px] h-[30%] bg-[#FFA155]"></div>
            <div className="w-[16px] h-[50%] bg-[#FFD3AF]"></div>
            <div className="w-[16px] h-[20%] bg-[#444CFC]"></div>
          </div>
        <div className="relative w-[624px] bg-white p-[40px]">
          <img src={Quote} alt="quote" className="absolute right-[40px] top-[-12px]" />
          <div>
            <h3 className="text-[24px]/[35px] text-[#232536] font-semibold">
              Finsweet has been a wonderful partner to work with. I have been a
              customer now for the past few months now and I have had nothing
              but positive experiences!
            </h3>
            <div className="flex items-center justify-between py-[30px]">
              <div className="flex items-center">
                <div>
                  <img src={Customer3} alt="customer3" className="w-[38px]" />
                </div>
                <div className="ml-3">
                <h3 className="font-semibold text-[#232536]">Johny Andro</h3>
                <p className="text-[#232536] opacity-60 font-semibold">Director Company</p>
                </div>
              </div>
              <div>
                <img src={customerLogo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
