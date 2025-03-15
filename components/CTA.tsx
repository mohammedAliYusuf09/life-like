import React from 'react'
import PrimaryBTN from './PrimaryBTN'
import catImage from '@/public/images/mpCat.jpg';
import catBusiness from '@/public/images/businesscat.jpg';
import catFood from '@/public/images/foodcat.jpg';
import catProduct from '@/public/images/productcat.jpg';
import CatItem from './CatItem'
import { Monda } from 'next/font/google';
import HeadingCTA from './HeadingCTA';



const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});



function CTA() {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-10'>
        <div className='bg-[#EBDDDD] rounded-md p-6 grid grid-cols-1 mt-5 md:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center gap-4'>
                <HeadingCTA text='Explore my groups 
                of photos'/>
                <p className={`text-base lg:text-sm xl:text-lg 2xl:text-xl text-[#6b6d4a] ${monda.className}`}>I have taken nearly every category of photos, 
                and I have received excellent feedback on them.</p>
                <div>
                    <PrimaryBTN>
                    Portfulio
                    </PrimaryBTN>   
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <CatItem image={catImage} title={'PERSONAL PHOTOGRAPHY'}/>
                <CatItem image={catBusiness} title={'BUSINESS PHOTOGRAPHY'}/>
                <CatItem image={catFood} title={'FOOD PHOTOGRAPHY'}/>
                <CatItem image={catProduct} title={'PRODUCT PHOTOGRAPY'}/>
            </div>
        </div>
    </div>
  )
}

export default CTA