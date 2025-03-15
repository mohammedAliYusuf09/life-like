import React from 'react'
import { Modern_Antiqua } from 'next/font/google';
import { Monda } from 'next/font/google';


const modernAntiqua = Modern_Antiqua({ subsets: ['latin'], weight: ['400'] });
const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});

function PortfolioHero() {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto md:my-6 lg:my-6 xl:my-8 2xl:my-10'>
        <h1 className={`${modernAntiqua.className} text-[1.5rem] sm:text-[3.2rem] md:text-[3.3rem] lg:text-7xl xl:text-[5.96rem] 2xl:text-[6.59rem] tracking-[0.052em] w-full text-center text-[#898F2C]`}>PORTFOLIO</h1>
        <p className={`text-center md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-[#81854c] ${monda.className}`}>Welcome to my photography portfolio! I am passionate about capturing the world through my lens, transforming moments into timeless memories. With expertise in portrait, event, landscape, and product photography, I strive to blend creativity and precision to tell compelling stories through my images. My journey has been enriched by working with diverse clients and projects, showcasing my work in exhibitions, publications, and campaigns. I believe every project is unique, and my approach is tailored to bring each client&#769;s vision to life with stunning, high-quality results. Let&#769;s collaborate to create visuals that inspire and leave a lasting impression.</p>
    </div>
  )
}

export default PortfolioHero