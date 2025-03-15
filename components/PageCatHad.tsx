import React from 'react'
import { Modern_Antiqua } from 'next/font/google';
import { Monda } from 'next/font/google';

interface Prop {
    title: string;
    cat: string;
    subCat: string;  
}

const modernAntiqua = Modern_Antiqua({ subsets: ['latin'], weight: ['400'] });
const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});
function PageCatHad({title, cat, subCat}: Prop) {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto pt-4 lg:pt-6 xl:pt-8 2xl:pt-10'>
        <h1 className={`${modernAntiqua.className} text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4rem] tracking-[0.052em] w-full text-center text-[#898F2C]`}>{title}</h1>
        <div className='text-center flex text-[#81854c] gap-3 justify-center items-center'><p className={`${monda.className} text-xl xl:text-2xl 2xl:text-3xl`}>{cat}</p> <span className={`${monda.className}  text-xl xl:text-2xl 2xl:text-3xl`}>/</span> <p className={`${monda.className} text-lg xl:text-xl 2xl:text-2xl`}>{subCat}</p></div>
    </div>
  )
}

export default PageCatHad