import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import btnShapes from "../assets/btn_shapes.svg";

const Button = (props) => {
  return (
    <div className="relative bg-[#444CFC] w-[219px] h-[64px] flex items-center justify-center cursor-pointer group transition-all duration-300 text-white">
      <span >{props.name}</span>
      <FaArrowRightLong className="ml-[15px] group-hover:translate-x-2 transition duration-300" size={18} />
      <img src={btnShapes} alt="btn-shapes" className="absolute top-0 left-0" />
    </div>
  );
};

export default Button;
