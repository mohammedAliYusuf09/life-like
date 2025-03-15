import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface Prop{
    images: StaticImageData[];  // Array of image paths
}

const ImageGrid = ({images}: Prop) => {
  return (
    <div className="bg-[#EBDDDD] py-6">
      <div className="md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto ">
        <div className="grid grid-cols-1 pt-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
