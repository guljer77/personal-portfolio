import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { FaBookOpen } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="bg-black/40 w-full h-[86px] backdrop-blur rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            smooth={true}
            spy={true}
            className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]"
          >
            <div className="flex flex-col items-center">
              <BiHomeAlt />
              <span className="text-xs">Home</span>
            </div>
          </Link>
          <Link
            to="about"
            smooth={true}
            spy={true}
            className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]"
          >
            <div className="flex flex-col items-center">
              <BiUser />
              <span className="text-xs">About</span>
            </div>
          </Link>
          <Link
            to="services"
            smooth={true}
            spy={true}
            className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]"
          >
            <div className="flex flex-col items-center">
              <FaBookOpen />
              <span className="text-xs">Abilities</span>
            </div>
          </Link>
          <Link
            to="work"
            smooth={true}
            spy={true}
            className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]"
          >
            <div className="flex flex-col items-center">
              <BsBriefcase />
              <span className="text-xs">Portfolio</span>
            </div>
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            className="cursor-pointer flex justify-center items-center w-[60px] h-[60px]"
          >
            <div className="flex flex-col items-center">
              <BsChatSquare />
              <span className="text-xs">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
