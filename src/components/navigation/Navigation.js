import React from "react";

const Menu = () => (
  <>
    <p>
      <a href="#Categories">Makeup</a>
    </p>
    <p>
      <a href="#Brands">Skin</a>
    </p>
    <p>
      <a href="#Offers">Bath & Body</a>
    </p>
    <p>
      <a href="#Rewards">Hair</a>
    </p>
    <p>
      <a href="#Boddesedit">Hygiene & Wellbeing</a>
    </p>
    <p>
      <a href="#Boddesedit">Men</a>
    </p>
    <p>
      <a href="#Boddesedit">Accessories</a>
    </p>
    <p>
      <a href="#Boddesedit">Appliances</a>
    </p>
    <p>
      <a href="#Boddesedit">Fragrances</a>
    </p>
  </>

);

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-center flex-row items-center px-6 md:px-4 lg:px-2 py-4 bg-[#fff]">
        <div className="flex md:flex-row flex-col items-center justify-center gap-6">
          <div className="hidden md:flex gap-8 text-[14px] font-semibold font-sans">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
