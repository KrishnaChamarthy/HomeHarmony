import React from "react";
import { FEATURES } from "../constants";

const Features = () => {
  return (
    <div className="pb-4 text-[#DADADA]">
      <h2 className="mt-20 text-center text-4xl">
        Smart Features at Your Fingertips
      </h2>
      <h2 className="mt-4 mb-32 text-center text-2xl text-[#9b9b9b] ">
        Key Features
      </h2>
      <div className="flex flex-col items-center">
        {FEATURES.map((feature, index) =>  (
          <div
            key={index}
            className={` flex ${
              index % 2 === 1 ? "flex-col-reverse" : "flex-col"
            } lg:grid lg:grid-cols-3 lg:gap-10 lg:w-[80%]`}
          >
            <div className="w-full lg:col-span-1">
              {index % 2 === 0 && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              )}
            </div>
            <div
              className={`w-full lg:col-span-1 flex flex-col ${
                index % 2 === 0 ? "lg:items-start" : "lg:items-end"
              }`}
            >
              <h3 className={`mb-2 font-semibold text-3xl text-center ${
                  index % 2 === 0 ? "lg:text-start" : "lg:text-end"
                }`}>{feature.title}</h3>
              <p
                className={`text-stone-400 text-center ${
                  index % 2 === 0 ? "lg:text-start" : "lg:text-end"
                }`}
              >
                {feature.description}
              </p>
            </div><div className="w-full lg:col-span-1">
              {index % 2 === 1 && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
