import React from "react";
import Web from "../../assets/Web-Strip.webp";
import ectotool from "../../assets/ecotools.webp";
import wefreeman from "../../assets/Web_Freeman.webp";
import webstrip from "../../assets/Web-EcoTools.webp";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 gap-5">
      <div className="w-full flex flex-row items-center justify-center">
        <img src={Web} alt="ad" className="w-2/4" />
      </div>
     
      <div className="flex flex-wrap justify-center gap-2">
        <img
          src={ectotool}
          alt="ecotools"
          className="rounded h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={wefreeman}
          alt="webfreeman"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={webstrip}
          alt="web-ecotools"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={wefreeman}
          alt="webfreeman"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-center">
        <img src={Web} alt="ad" className="w-2/4" />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <img
          src={ectotool}
          alt="ecotools"
          className="rounded h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={wefreeman}
          alt="webfreeman"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={webstrip}
          alt="web-ecotools"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
        <img
          src={wefreeman}
          alt="webfreeman"
          className="rounded border h-80 hover:scale-95 transition-transform duration-300"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-center">
        <img src={Web} alt="ad" className="w-2/4" />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h4 className="text-4xl tracking-wider font-serif">More to Explore</h4>
      </div>


    </div>
  );
};

export default HomePage;
