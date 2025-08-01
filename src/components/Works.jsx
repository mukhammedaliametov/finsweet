import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Works = () => {
  const workItems = [
    {
      name: "Full Stack Developer",
      location: "Bengaluru · Full Time",
      pay: "$10K - $18K · No equity",
    },
    {
      name: "Testing Engineer",
      location: "Remote · Full Time ",
      pay: "$08K - $10K · No equity",
    },
    {
      name: "Hr Manager",
      location: "Mumbai . Fultime",
      pay: "$08K - $10K · 4 to 5 Yrs Exp",
    },
    {
      name: "Product Designer",
      location: "Mumbai . Fultime",
      pay: "$08K - $10K · 4 to 5 Yrs Exp",
    },
    {
      name: "Wordpress Developer",
      location: "Mumbai, Full Time",
      pay: "$08K - $10K · 4 to 5 Yrs Exp",
    },
    {
      name: "Jr. QA Tester",
      location: "California, USA . Full Time",
      pay: "$14K - $23K · No equity",
    },
    {
      name: "Sr. UX Designer",
      location: "California, USA . Full Time",
      pay: "$14K - $23K · No equity",
    },
    {
      name: "Social Media Manager",
      location: "Kolkata, India .  Fulltime",
      pay: "$5K - $6K ·  Fresher",
    },
    {
      name: "Golang Developer",
      location: "Mumbai . Fultime",
      pay: "$08K - $10K · 4 to 5 Yrs Exp",
    },
  ];
  return (
    <div className="container my-[50px] mb-[160px]">
      <div data-aos="fade-up" className="grid grid-cols-3 gap-[20px] bg-[#ECF8F9] p-[50px]">
        {workItems.map((item, index) => (
            <div key={index} className="bg-white p-[40px]">
                <h3 className="text-[16px] mb-[15px] font-semibold">{item.name}</h3>
                <p className="text-[#232536] opacity-60 text-[16px]">{item.location}</p>
                <p className="text-[#232536] opacity-60 text-[16px]">{item.pay}</p>
                <div className="flex items-center group transition-all duration-300 cursor-pointer mt-[35px]">
                  <Link to={"#"} className="text-[#444CFC] text-[16px]">
                    Apply Now
                  </Link>
                  <FaArrowRightLong className="ml-[10px] text-[17px] group-hover:translate-x-2 transition duration-300" />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
