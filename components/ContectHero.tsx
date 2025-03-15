import React from 'react'
import { Modern_Antiqua } from 'next/font/google';
import Image from 'next/image';
import contactImage from '@/public/images/contect.jpg';


const modernAntiqua = Modern_Antiqua({ subsets: ['latin'], weight: ['400'] });
function ContectHero() {
  return (
    <div className='relative overflow-hidden h-[15rem]'>
        <Image className='w-full h-full object-cover' src={contactImage} alt='contect image'/>
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <h1 className={`${modernAntiqua.className} text-[2rem] sm:text-[3.2rem] md:text-[3.3rem] lg:text-7xl xl:text-[5.96rem] 2xl:text-[6.59rem] tracking-[0.052em] w-full text-center text-[#898F2C]`}>Contect Me</h1>
        </div>
    </div>
  )
}

export default ContectHero