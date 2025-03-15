import Image, { StaticImageData } from 'next/image';

import React from 'react'

interface Prop {
    image : StaticImageData,
    title : string;
}

function CatItem({image, title}: Prop) {
  return (
    <div className='flex flex-col items-center gap-2'>
        <Image className='rounded-md border border-[#898F2C]' src={image} alt={title} width={300} height={250}/>
        <h3 className='text-[#6b6d4a]'>{title}</h3>
    </div>
  )
}

export default CatItem