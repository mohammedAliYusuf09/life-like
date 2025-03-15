import Link from 'next/link';
import React from 'react'
import { Maven_Pro } from 'next/font/google';


const mavenPro = Maven_Pro({
  subsets: ['latin'], 
  weight: '600', 
});
function Footer() {
  return (
    <div className='bg-[#EBDDDD] pt-8'>
        <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0 '>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0'>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-xl font-semibold text-[#444444] pb-1'>MAIN LINKS</h4>
                    <li className='list-none hover:text-[#898F2C] transition-all ease-out duration-300 text-[#5e5d5d]'><Link href={'/home'}>HOME</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/blog'}>BLOG</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/about'}>ABOUT</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/portfulio'}>PORTFULIO</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/contact'}>CONTACT</Link></li>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-xl font-semibold text-[#444444] pb-1'>BUSINESS</h4>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/home'}>BRANDING </Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/blog'}>FOOD </Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/about'}>RESTAURANT</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/portfulio'}>PRODUCT</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/contact'}>BAKED GOODS</Link></li>
                </div>
                <div className='flex flex-col gap-2 overflow-clip'>
                    <h4 className='text-xl font-semibold text-[#444444] pb-1'>PEOPLE</h4>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/home'}>WEDDING + ENGAGEMENT</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/blog'}>FAMILY </Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/about'}>HEADSHOTS</Link></li>
                    <li className='list-none hover:text-[#898F2C] text-[#5e5d5d] transition-all ease-out duration-300'><Link href={'/portfulio'}>NEWBORN</Link></li>
                </div>
            </div>
            <div>
                <h1 className={`${mavenPro.className} text-xl xl:text-2xl 2xl:text-4xl text-[#898F2C]`}>JOIN THE CLUB!</h1>
                <form action="#" className='flex flex-col gap-4'>
                    <input className='w-full focus:outline-none border-b border-[#898F2C] py-2 xl:py-3 2xl:py-4 text-base lg:text-base xl:text-lg 2xl:text-xl bg-transparent' type="text" name="name" id="name" placeholder='Name' />
                    <input className='w-full focus:outline-none border-b border-[#898F2C] py-2 xl:py-3 2xl:py-4 text-base lg:text-base xl:text-lg 2xl:text-xl bg-transparent' type="email" name="email" id="email" placeholder='Email' />
                    <input className='w-full focus:outline-none border-b border-[#898F2C] py-2 xl:py-3 2xl:py-4 text-base lg:text-base xl:text-lg 2xl:text-xl bg-transparent' type="number" name="zip" id="zip" placeholder='Zip code' />
                    <div className='flex justify-end'>
                        <button disabled className='bg-[#898F2C] text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold px-4 py-2 rounded text-white' type="submit">Join</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto pt-4 lg:pt-6 xl:pt-8 2xl:pt-10'>
            <p className='py-4 text-[#5e5d5d] text-lg 2xl:text-xl'>&copy;2025 Life Like. All rights reserved.</p>
        </div>
    </div>
    
  )
}

export default Footer;