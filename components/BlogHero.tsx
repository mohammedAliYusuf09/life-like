'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Monda } from 'next/font/google';
import profetional from '@/public//images/profetionalcat.jpg'
import business from '@/public//images/businesscat.jpg'
import foodImage from '@/public//images/foodcat.jpg'
import prodeuc from '@/public//images/productcat.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

interface Slide {
  image: StaticImageData;
  title: string;
  description: string;
}

const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});

const BlogHero: React.FC = () => {
  const slides: Slide[] = [
    {
      image: prodeuc, // Replace with your actual image paths
      title: " Make Your Products Shine with Expert Product Photography",
      description: "Highlight your products with crisp, detailed, and visually compelling photography. Whether for e-commerce, catalogs, or advertisements, our product photography ensures your items stand out, driving customer interest and boosting sales with images that speak quality and trust.",
    },
    {
      image: business,
      title: "Showcase Your Brand with Impactful Business Photography",
      description: "Bring your brand’s story to life with dynamic business photography. From corporate headshots to office environments and client interactions, we create visual content that communicates trust, competence, and professionalism. Perfect for websites, marketing materials, and business portfolios.",
    },
    {
      image: foodImage,
      title: "Savor the Flavor with Stunning Food Photography",
      description: "Transform your culinary creations into works of art with vibrant and appetizing food photography. Designed for restaurants, food blogs, and product promotions, we capture every texture, color, and detail, making your dishes irresistible and enticing to your audience.",
    },
    {
      image: profetional,
      title: "Elevate Your Image with Professional Photography",
      description: "Capture the essence of professionalism with tailored photoshoots that highlight your personality and expertise. From executive portraits to team photos, our professional photography services are designed to reflect your unique brand identity, ensuring a polished and lasting impression for business profiles, corporate events, and more.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto px-4 py-4">
      {/* Slide */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-8 left-8 text-white flex flex-col gap-2">
            <h2 className="text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-bold">{slides[currentSlide].title}</h2>
            <p className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-100 ${monda.className}`}>{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300 hover:text-gray-50 p-3 text-3xl"
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300  hover:text-gray-50 p-3 text-3xl"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default BlogHero;