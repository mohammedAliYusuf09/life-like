import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

interface Prop {
    children: React.ReactNode;
}

function PrimaryBTN({children}: Prop) {
  return (
    <button className='bg-white px-3 py-2 rounded-2xl flex items-center gap-4 border border-[#898F2C]'>
        <p className='text-base 2xl:text-lg'>{children}</p>
        <div className='bg-[#333333] rounded-full text-[#898F2C] p-1 xl:p-2 2xl:p-3 text-lg'>
            <MdOutlineArrowOutward />
        </div>
    </button>
  )
}

export default PrimaryBTN

{/* <div className='bg-[#333333] rounded-full text-[#81854c] p-3'>
            <MdOutlineArrowOutward />
        </div> */}