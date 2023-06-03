import React from "react";
import Container from "./Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaLaravel
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Services = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] my-10" id="services">
      <Container>
        <div className="text-center">
          <p className="text-[16px] text-white/50">My Abilities</p>
          <h2 className="text-[32px] font-semibold text-cyan-600">
            My Experience
          </h2>
        </div>
        <div className="lg:flex items-center justify-between mt-5 gap-5">
          <div className="lg:w-1/2 w-full bg-black/20 rounded-md p-5 mb-5 lg:mb-0">
            <h2 className="text-cyan-600 text-center text-[18px]">
              Frontend Developer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaHtml5 className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    HTML
                  </h4>
                  <p className="text-[14px] font-light text-white/80">Expert</p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaCss3Alt className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">CSS</h4>
                  <p className="text-[14px] font-light text-white/80">Expert</p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaBootstrap className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Bootstrap
                  </h4>
                  <p className="text-[14px] font-light text-white/80">Expert</p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <SiTailwindcss className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Tailwind Css
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Comfortable
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaJs className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Javascript
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Comfortable
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaReact className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    React Js
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Comfortable
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaGitAlt className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">Git</h4>
                  <p className="text-[14px] font-light text-white/80">
                    Intermediate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-black/20 rounded-md p-5">
            <h2 className="text-cyan-600 text-center text-[18px]">
              Backend Developer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <SiFirebase className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Firebase
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Comfortable
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaNodeJs className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Node js
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Intermediate
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <SiExpress className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Express Js
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Intermediate
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <SiMongodb className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    MongoDB
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Comfortable
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <SiRedux className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Redux
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Learning
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <TbBrandNextjs className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    Next.js
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Learning
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center pb-5">
                <span>
                  <FaReact className="inline-block text-[28px] text-cyan-600" />
                </span>
                <div>
                  <h4 className="text-[16px] font-normal text-white/80">
                    PHP Laravel
                  </h4>
                  <p className="text-[14px] font-light text-white/80">
                    Basic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
