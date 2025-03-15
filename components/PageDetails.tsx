import React from 'react'
import { Meera_Inimai } from 'next/font/google';
import { Monda } from 'next/font/google';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Prop {
    heading: string;
    phara: string;
    image: StaticImageData;
}

const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});

const meeraInimai = Meera_Inimai({
  subsets: ['latin'],
  weight: ['400']
});

function PageDetails({heading, phara, image}:Prop) {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto pt-8 lg:pt-10 xl:pt-14 2xl:pt-20 grid grid-cols-1 md:grid-cols-[4fr_2fr] md:gap-4 pb-8'>
        <div className='flex flex-col gap-4'>
        <h2 className={`${meeraInimai.className} text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-[#898F2C]`}>{heading}</h2>
        <p className={`text-sm leading-5 lg:text-lg lg:leading-7 xl:text-xl xl:leading-10 2xl:text-2xl 2xl:leading-10 text-[#81854c] ${monda.className}`}>{phara}</p>
        </div>
        <div>
            <Image className='w-full border border-gray-500 mt-4 md:mt-0' src={image} width={400} height={400} alt='Branding detali image'/> 
        </div>
    </div>
  )
}

export default PageDetails