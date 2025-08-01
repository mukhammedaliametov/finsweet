import React from "react";
import Logo from "../assets/Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Logo1 from "../assets/black_logo.svg";
import shapes from "../assets/footer_shapes.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative mt-[60px]">
      <div className="container flex items-top justify-between">
        <img src={shapes} alt="shapes" className="absolute top-[-80px]" />
        <div>
          <h3 className="text-[40px] font-semibold w-[452px]">Let's make <br /> something special</h3>
          <p className="text-[22px] font-semibold my-[30px]">Let's talk! 🤙 </p>
          <p className="text-[18px]">020 7993 2905</p>
          <p className="text-[18px]">hi@finsweet.com</p>
          <p className="text-[18px] border-t mt-[20px] pt-[20px] w-[300px] border-[#00000014] mb-[20px]">DLF Cybercity, Bhubaneswar, <br /> India, &52050</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <Link to={"#"} className="font-semibold">Home</Link>
          <Link to={"#"} className="font-semibold">Services</Link>
          <Link to={"#"} className="font-semibold">Company</Link>
          <Link to={"#"} className="font-semibold">Career</Link>
          <Link to={"#"} className="font-semibold">News</Link>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <Link to={"#"} className="font-semibold">Service</Link>
          <Link to={"#"}>Technical support</Link>
          <Link to={"#"}>Testing</Link>
          <Link to={"#"}>Development</Link>
          <Link to={"#"}>AWS/Azure </Link>
          <Link to={"#"}>Consulting</Link>
          <Link to={"#"}>Information Technology</Link>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <Link to={"#"} className="font-semibold">Resourses</Link>
          <Link to={"#"}>About Us</Link>
          <Link to={"#"}>Testimonial</Link>
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Terms of use</Link>
          <Link to={"#"}>Blog</Link>
        </div>
      </div>
      <div className="bg-[#FFE6D2] py-[30px]">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-[40px]">
            <img src={Logo1} alt="logo" />
            <p>&copy;2021 Finsweet</p>
          </div>
          <div className="flex items-center text-[18px] gap-[20px]">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
