import React from "react";
import Container from "./Container";
import image from "../assets/download.jpg";
import { FaBriefcase, FaMoneyCheck, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[78vh] my-10 font-montserrat"
      id="about"
    >
      <Container>
        <div className="text-center">
          <p className="text-[16px] text-white/50">My Intro</p>
          <h2 className="text-[32px] font-semibold text-cyan-600">About Me</h2>
        </div>
        <div className="lg:flex justify-between items-center gap-5">
          <div className="lg:w-1/2 w-full p-10">
            <div>
              <img src={image} className="w-full rounded-xl" alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-10">
            <div className="lg:flex items-center gap-2 justify-between">
              <div className="bg-black/20 text-center mb-3 p-4 rounded-lg">
                <span>
                  <FaBriefcase className="inline-block text-cyan-600 text-[32px]" />
                </span>
                <h4 className="text-[16px] font-semibold pt-2 text-white">Experience</h4>
                <p className="text-[14px] font-light text-white">6Month Working</p>
              </div>
              <div className="bg-black/20 text-center mb-3 p-4 rounded-lg">
                <span>
                  <FaMoneyCheck className="inline-block text-cyan-600 text-[32px]" />
                </span>
                <h4 className="text-[16px] font-semibold pt-2 text-white">Completed</h4>
                <p className="text-[14px] font-light text-white">10+ Projects</p>
              </div>
              <div className="bg-black/20 text-center p-4 rounded-lg">
                <span>
                  <FaClock className="inline-block text-cyan-600 text-[32px]" />
                </span>
                <h4 className="text-[16px] font-semibold pt-2 text-white">Support</h4>
                <p className="text-[14px] font-light text-white">Online 24/7</p>
              </div>
            </div>
            <p className="py-5 text-white/80 font-light">High level experience in web design and development knowledge, producing quality work</p>
            <button className="btn px-3 py-2 rounded-lg">Contact Me</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
