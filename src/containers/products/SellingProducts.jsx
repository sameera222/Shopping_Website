import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ink_icon from "../../assets/ink.webp";
import perfume_icon from "../../assets/perfume.webp";
import perfume_bottle from "../../assets/perfume-2.webp";
import remedies_img from "../../assets/remedies.webp";
import sugar from "../../assets/sugar.webp";

const SellingProducts = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex p-4">
        <div className="flex flex-col items-start justify-start p-4">
          <h2 className="flex items-start justify-start text-3xl">
            Bestselling Products
          </h2>
          <h5 className="flex items-start justify-start text-lg">
            Most admired products that become a part of your lifestyle
          </h5>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <div>
          <div>
            <p className="bg-[#e0afa5] p-2 rounded-t-lg font-bold text-xs">
              FREE MASK ON RS.1499
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={perfume_icon} alt="freeman" className="w-32" />
          </div>

          <div className="p-2">
            <p>Estee Lauder Advance Night</p>
            <h6>Rs. 5900</h6>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <AiOutlineHeart size={30} color="#edc5bd" />
            <button className="bg-[#e0afa5] rounded-tl-lg rounded-br-lg border text-sm p-2 font-bold">
              ADD TO BAG
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="bg-[#e0afa5] p-2 rounded-t-lg font-bold text-xs">
              FREE MASK ON RS.1499
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={sugar} alt="ecotools" className="w-32" />
          </div>
          <div className="p-2">
            <p>Estee Lauder Advance Night</p>
            <h6>Rs. 5900</h6>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <AiOutlineHeart size={30} color="#edc5bd" />
            <button className="bg-[#e0afa5] rounded-tl-lg rounded-br-lg border text-sm p-2 font-bold">
              ADD TO BAG
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="bg-[#e0afa5] p-2 rounded-t-lg font-bold text-xs">
              FREE MASK ON RS.1499
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={ink_icon} alt="avon" className="w-32" />
          </div>
          <div className="p-2">
            <p>Estee Lauder Advance Night</p>
            <h6>Rs. 5900</h6>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <AiOutlineHeart size={30} color="#edc5bd" />
            <button className="bg-[#e0afa5] rounded-tl-lg rounded-br-lg border text-sm p-2 font-bold">
              ADD TO BAG
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="bg-[#e0afa5] p-2 rounded-t-lg font-bold text-xs">
              FREE MASK ON RS.1499
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={perfume_bottle} alt="abhicon" className="w-32" />
          </div>
          <div className="p-2">
            <p>Estee Lauder Advance Night</p>
            <h6>Rs. 5900</h6>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <AiOutlineHeart size={30} color="#edc5bd" />
            <button className="bg-[#e0afa5] rounded-tl-lg rounded-br-lg border text-sm p-2 font-bold">
              ADD TO BAG
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="bg-[#e0afa5] p-2 rounded-t-lg font-bold text-xs">
              FREE MASK ON RS.1499
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={remedies_img} alt="jbicon" className="w-32" />
          </div>
          <div className="p-2">
            <p>Estee Lauder Advance Night</p>
            <h6>Rs. 5900</h6>
          </div>
          <div className="flex flex-row justify-center gap-2 ">
            <AiOutlineHeart size={30} color="#edc5bd" />
            <button className="bg-[#e0afa5] rounded-tl-lg rounded-br-lg border text-sm p-2 font-bold">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProducts;
