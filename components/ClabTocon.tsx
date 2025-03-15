import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

interface Prop{
    title: string;
}

function ClabTocon({title}: Prop) {
  return (
    <div className='mt-4 flex justify-between text-[#6b6d4a]'><p className='text-base sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl'>{title}</p><span className='text-[#898F2C] text-base sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl'><FaCircleCheck /></span></div>
  )
}

export default ClabTocon