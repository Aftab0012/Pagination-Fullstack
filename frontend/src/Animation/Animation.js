import React from "react";
import { Waveform } from "@uiball/loaders";

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
      <div className="waveform">
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
      </div>
      <p className="mt-12 ml-8 text-white">Please wait...</p>
    </div>
  );
};

export default LoadingAnimation;
