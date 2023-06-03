import React, { useEffect } from "react";
import Container from "./Container";
import Animation from '../../public/web.json';
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <Container>
        <div className="flex flex-col gap-y-8 font-montserrat lg:flex-row lg:items-center lg:gap-x-12">
          <div
            className="lg:text-left lg:w-1/2 w-full flex-1 text-center"
            data-aos="fade-right"
          >
            <span className="text-[16px] font-semibold text-cyan-600">Hi, I'am</span>
            <h1 className="text-[26px] uppercase font-bold tracking-wide text-white leading-[1] lg:text-[48px]">
              Guljer <span>Hossain</span>
            </h1>
            <div className="pt-2 text-white uppercase text-[18px] font-semibold lg:text-[28px]">
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Designer",
                  1000,
                  "Frontend Developer",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                className="text-cyan-600"
                speed={50}
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="mx-auto lg:mx-0 max-w-lg py-5 text-white/80">
              High level experience in web design and development knowledge, producing quality work 
            </p>
            <div className="flex text-[20px] cursor-pointer gap-x-6 max-w-max mx-auto lg:mx-0 my-5 text-white">
              <a href="">
                <FaFacebook />
              </a>
              <a href="https://github.com/guljer77">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </div>
            <button className="btn px-5 rounded-lg py-2">Download CV</button>
          </div>
          <div className="hidden w-1/2 lg:block" data-aos="fade-down">
            <Lottie animationData={Animation} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
