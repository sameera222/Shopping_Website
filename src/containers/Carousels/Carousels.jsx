import React from 'react';
import ImageCarousel from '../../components/carousel/ImageCarousel';
import carouselItems from '../../components/carousel/Carouselitems'

const Carousels = () => {
  return (
    <div className="bg-gray-100 flex flex-row items-center justify-center w-full mt-10">
      <ImageCarousel items={carouselItems} />
    </div>
  );
};

export default Carousels;
