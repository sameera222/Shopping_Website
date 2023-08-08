import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ImageCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? "active" : "hidden"
          }`}
        >
          <img src={item} alt={`Slide ${index}`} className="w-full" />
        </div>
      ))}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <FaArrowAltCircleLeft color="black" size={30} className="ml-5" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <FaArrowAltCircleRight color="black" size={30} className="mr-5" />
      </button>
    </div>
  );
};

export default ImageCarousel;
