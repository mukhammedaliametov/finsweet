import React from "react";
import Logo from "../assets/Logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const navItem = [
    { name: "Home", link: "/" },
    { name: "Service", link: "javascript:void(0)" },
    { name: "Company", link: "javascript:void(0)" },
    { name: "Career", link: "/career" },
    { name: "Blog", link: "javascript:void(0)" },
    { name: "Contact Us", link: "javascript:void(0)" },
  ];
  return (
    <>
      <div className="bg-[#232536] text-white sticky top-0 z-999 w-full">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="w-[122px]">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-[30px]">
            {navItem.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "py-[30px] border-t-[3px] border-[#FFA155] opacity-100"
                    : "py-[30px] border-t-[3px] border-[#ffa15500] opacity-60 hover:opacity-100 transition duration-200"
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center text-[#FFD3AF] group w-[137px]">
              <Link
                to={"javascript:void(0)"}
                className="group-hover:mr-[10px] mr-[8px] transition-all duration-300"
              >
                Clone Project
              </Link>
              <FaArrowRightLong className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
