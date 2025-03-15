import { Modern_Antiqua } from 'next/font/google';
import { Monda } from 'next/font/google';
import Image from 'next/image';
import HeroImage from '@/public/images/hero.jpg';
import HeroVactor from '@/public/images/hero-vartor.png';
import React from 'react'


const modernAntiqua = Modern_Antiqua({ subsets: ['latin'], weight: ['400'] });
const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});

function Hero() {
  return (
    <div className="md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-10">
          <h1 className={`${modernAntiqua.className} text-[1.5rem] sm:text-[3.2rem] md:text-[3.3rem] lg:text-7xl xl:text-[5.96rem] 2xl:text-[6.59rem] tracking-[0.052em] w-full text-center text-[#898F2C]`}>CAPTURING MOMENTS </h1>
          <h1 className={`${modernAntiqua.className} text-[1.5rem] sm:text-[3.2rem] md:text-[3.3rem] lg:text-7xl xl:text-[5.96rem] 2xl:text-[6.6rem] tracking-[0.15em] text-center text-[#898F2C]`}>AS PHOTOGRAPHER </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 2xl:gap-10  mt-4 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10'>
            <div className='relative place-self-center lg:place-self-auto'>
              <p className={`text-right md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-[#81854c] ${monda.className}`}>My name is Ornelas. Based in Ornelas, I specialize in capturing life&#769;s most cherished moments through the lens. With a passion for storytelling and an eye for detail, I create photographs that resonate with emotion and beauty. Whether it&#769;s portraits, events, or creative projects, I&#769;m here to turn your vision into art. Let&#769;s work together to create something timeless.</p>
              <div className='absolute bottom-0 right-4 invisible lg:visible'>
                <Image className='w-full' src={HeroVactor} width={200} alt="vactor image" />
              </div>
            </div>
            <Image className='rounded 2xl:rounded-lg place-self-center lg:place-self-start' src={HeroImage} alt='Hero image' width={600}/>
          </div>
      </div>
  )
}

export default Hero