import React from "react";
import hero from "../assets/outputrender.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pb-4 pt-12 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center ">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-[#DADADA]">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl text-center tracking-tighter lg:text-6xl lg:text-left">
              Transform Your Space with{" "}
              <span className="bg-gradient-to-br from-[#9579e1] via-[#4065fe] to-[#22caff] text-transparent bg-clip-text">
                Smart Design
              </span>
            </h2>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-center xl:text-start">
              Upload a floor plan, let AI do the work, and get inspired by
              furniture recommendations tailored for your unique space.
            </p>
            <div className="mt-12 text-4xl flex items-center justify-center gap-8">
              <Link
                to="/upload"
                className="bg-gradient-to-br from-[#9579e1] via-[#4065fe] to-[#22caff] rounded-xl py-3 px-6 text[#DADADA] text-xl cursor-pointer text-center"
              >
                Start Your Journey
              </Link>
              <div className="bg-[#DADADA] rounded-xl py-3 px-6 text-[#1A1A1A] text-xl cursor-pointer text-center">
                Discover Features
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
