import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Menu = () => (
  <>
    <p>
      <a href="#Categories">Categories</a>
    </p>
    <p>
      <a href="#Brands">Brands</a>
    </p>
    <p>
      <a href="#Offers">Offers</a>
    </p>
    <p>
      <a href="#Rewards">Rewards</a>
    </p>
    <p>
      <a href="#Boddesedit">Boddess Edit</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-center flex-row items-center px-6 md:px-4 lg:px-2 py-8 bg-[#ffeeec]">
      <div className="flex md:flex-row flex-col items-center justify-center gap-2">
        <div className="mr-8">
          {toggleMenu ? (
            <img
              src="https://static.boddess.com/media/logo/stores/1/Boddess_new_logo.png"
              alt="logo"
              className="custom-width-170 h-auto"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <img
              src="https://static.boddess.com/media/logo/stores/1/Boddess_new_logo.png"
              alt="logo"
              className="custom-width-170 h-auto"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        <div className="hidden md:flex gap-4">
          <Menu />
        </div>
        <div className="flex flex-col justify-center search relative">
          <CiSearch className="flex absolute left-2 top-1/2 transform -translate-y-1/2" />
          <input
            placeholder="Search"
            className="border border-gray-400 rounded-lg p-2 text-center items-center justify-center flex w-full"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex flex-row gap-4">
          <div className="hidden md:flex flex-row gap-4">
            <BiUser size={25} className="ml-2" />
            <h6>SIGN IN</h6>
          </div>
          <div>
            <AiOutlineHeart size={30} />
          </div>
          <div>
            <HiOutlineShoppingBag size={30} />
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden absolute top-28 right-10 left-10 mt-6 px-4 py-4 bg-gray-800 rounded-md shadow-md">
          <div className="flex flex-col items-center justify-center text-right text-white p-2">
            <Menu />

            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center text-white gap-2">
                <div className="text-white text-center">
                  <BiUser size={25} />
                </div>
              </div>
              <div className="flex flex-col items-center text-right text-white">
                <AiOutlineHeart size={30} />
              </div>
              <div className="flex flex-col text-right items-center text-white">
                <HiOutlineShoppingBag size={30} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
