import React from "react";
import avon_icon from "../../assets/avon.webp";
import ecotoolslog from "../../assets/ecotools-logs.webp";
import freeman_icon from "../../assets/Freeman-Logo.webp";
import ABH_icon from "../../assets/ABH-Logo.webp";
import JB_icon from "../../assets/JB-Web.webp";

const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 gap-4">
      <div className="flex ">
      <div className="flex flex-row items-start justify-start">
        <h2 className="flex items-start justify-start text-4xl">
          Trending Brands
        </h2>
      </div>
    </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <img src={avon_icon} alt="avon" className="w-36" />
        <img src={ecotoolslog} alt="ecotools" className="w-36" />
        <img src={freeman_icon} alt="freeman" className="w-36" />
        <img src={ABH_icon} alt="abhicon" className="w-36" />
        <img src={JB_icon} alt="jbicon" className="w-36" />
      </div>
    </div>
  );
};

export default Brands;
