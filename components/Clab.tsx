import React from 'react'
import { Monda } from 'next/font/google';
import { Maven_Pro } from 'next/font/google';
import { Meera_Inimai } from 'next/font/google';

import ClabTocon from './ClabTocon';

const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});
const mavenPro = Maven_Pro({
  subsets: ['latin'], 
  weight: '600', 
});

const meeraInimai = Meera_Inimai({
  subsets: ['latin'],
  weight: ['400']
});

function Clab() {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto mt-4 md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-10'>
        <h1 className={`${mavenPro.className} text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-[#898F2C]`}>JOIN THE CLUB!</h1>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 lg:gap-10 mt-4 xl:mt-6 2xl:mt-10'>
            <div>
                <h4 className={`text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-[#3c3d2c] ${meeraInimai.className}`}>What is this about?</h4>
                <p className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#646646] mt-2 ${monda.className}`}>Join my club to learn more about my professional work, wildlife photography, and more!</p>
                <ClabTocon title={'NEWSLETTER IN A WEEK'}/>
                <ClabTocon title={'NEWSLETTER IN A WEEK'}/>
                <ClabTocon title={'NEWSLETTER IN A WEEK'}/>
                <ClabTocon title={'NEWSLETTER IN A WEEK'}/>
            </div>
            <form action="#" className='flex flex-col gap-6 ml-0 md:ml-8'>
                <input className='w-full focus:outline-none border-b border-[#898F2C] py-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl' type="text" name="name" id="name" placeholder='Name' />
                <input className='w-full focus:outline-none border-b border-[#898F2C] py-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl' type="email" name="email" id="email" placeholder='Email' />
                <input className='w-full focus:outline-none border-b border-[#898F2C] py-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl' type="number" name="zip" id="zip" placeholder='Zip code' />
                <div className='flex justify-end'>
                    <button disabled className='bg-[#898F2C] text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold px-4 py-2 rounded text-white' type="submit">Join</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Clab