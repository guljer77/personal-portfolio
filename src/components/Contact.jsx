import React from "react";
import Container from "./Container";
import { FaEnvelope, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      className="min-h-[85vh] font-montserrat mb-20 lg:min-h-[78vh] my-10"
      id="contact"
    >
      <Container>
        <div className="text-center">
          <p className="text-[16px] text-white/50">Get in touch</p>
          <h2 className="text-[32px] font-semibold text-cyan-600">
            Contact Me
          </h2>
        </div>
        <div className="lg:flex justify-between gap-10 mt-10">
          <div className="lg:w-1/2 w-full text-white/80">
            <h2 className="text-center mb-5 text-[18px] font-semibold text-white/80">
              Talk to me
            </h2>
            <div className="bg-black/20 text-center mb-5 p-4 rounded-lg">
              <p>
                <FaEnvelope className="inline-block text-[32px] text-cyan-600" />
              </p>
              <p className="tex-[18px] font-normal pt-2">Email</p>
              <p className="tex-[14px] py-1 font-light">guljer.net@gmail.com</p>
              <div className="flex items-center justify-center text-cyan-600 cursor-pointer">
                <button>Write me</button>
                <BsArrowRight className="inline-block text-[32px] pl-2" />
              </div>
            </div>
            <div className="bg-black/20 mb-5 text-center p-4 rounded-lg">
              <p>
                <FaWhatsappSquare className="inline-block text-[32px] text-cyan-600" />
              </p>
              <p className="tex-[18px] font-normal pt-2">Whatsapp</p>
              <p className="tex-[14px] py-1 font-light">+880 1792790977</p>
              <div className="flex items-center justify-center text-cyan-600 cursor-pointer">
                <button>Write me</button>
                <BsArrowRight className="inline-block text-[32px] pl-2" />
              </div>
            </div>
            <div className="bg-black/20 mb-5 text-center p-4 rounded-lg">
              <p>
                <FaLinkedin className="inline-block text-[32px] text-cyan-600" />
              </p>
              <p className="tex-[18px] font-normal pt-2">Linkedin</p>
              <p className="tex-[14px] py-1 font-light">guljer-1094b1253</p>
              <div className="flex items-center justify-center text-cyan-600 cursor-pointer">
                <button>Write me</button>
                <BsArrowRight className="inline-block text-[32px] pl-2" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-center mb-5 text-[18px] font-semibold text-white/80">
              Write me your project
            </h2>
            <div className="text-white/80">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="" className="text-[16px] pb-2 block">Name</label>
                  <input className="py-2 w-full outline-0 border-2 bg-transparent p-2 rounded-lg border-cyan-500" type="text" name="name" placeholder="Insert your name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="text-[16px] pb-2 block">Email</label>
                  <input className="py-2 w-full outline-0 border-2 bg-transparent p-2 rounded-lg border-cyan-500" type="email" name="name" placeholder="Insert your email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="text-[16px] pb-2 block">Message</label>
                  <textarea className="py-2 w-full outline-0 border-2 bg-transparent p-2 rounded-lg border-cyan-500 resize-none h-[220px]" name="message" id="" placeholder="Text me your Message"></textarea>
                </div>
                <div>
                  <input type="submit" className="btn cursor-pointer px-5 py-2 rounded-lg" value="Send Me" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
