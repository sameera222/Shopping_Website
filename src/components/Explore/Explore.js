import React from "react";
import Bath_Body from "../../assets/Bath_Body_Web.webp";
import  Fragrance  from "../../assets/Fragrance_Web.webp";
import  Skincare  from "../../assets/Skincare_Web.webp";
import  Makeup  from "../../assets/Makeup_Web.webp";

const Explore = () => {
  return (
 <div class="flex flex-col items-center justify-center gap-4">
  <div class="flex gap-2">
    <img src={Bath_Body} alt="bathbody" className="w-[50%] h-96 rounded border border-none"/>
    <img src={Fragrance} alt="fragrance" className="w-[50%] h-96 rounded border " />
  </div>
  <div class="flex gap-2">
    <img src={Skincare} alt="skincare" className="w-[50%] h-96 rounded border " />
    <img src={Makeup} alt="makeup" className="w-[50%] h-96 rounded border " />
  </div>
 </div>

  );
};

export default Explore;
