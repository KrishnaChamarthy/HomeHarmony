import React from "react";
import { FEATURES } from "../constants";
const FeaturesAlt = () => {
  return (
    <div className="pb-4 text-[#DADADA]">
      <h2 className="mt-20 text-center text-4xl">
        Smart Features at Your Fingertips
      </h2>
      <h2 className="mt-4 mb-32 text-center text-2xl text-[#9b9b9b] ">
        Key Features
      </h2>
      <div className="flex flex-col items-center">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-14 items-center"
          >
            <div className="w-full lg:w-1/4">
              
                <img
                  src={feature.image}
                  alt={feature.title}
                  
                  className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out "
                />
             
            </div>
            <div
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-3xl">{feature.title}</h3>
              <p className="text-stone-400">{feature.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesAlt;
