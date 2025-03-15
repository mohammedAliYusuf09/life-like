import Image from 'next/image'
import React from 'react'
import { IoIosTimer } from "react-icons/io";

import { Monda } from 'next/font/google';
import Link from 'next/link';
import { StaticImageData} from 'next/image';

interface Prop {
  blog: {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
    createdAt: string;
  };
 
}


const monda = Monda({
  subsets: ['latin'], 
  weight: ['400','600'], 
});

function BlogItem({blog}:Prop) {
  return (
    <Link href={`/blog/${blog.id}`} className='flex flex-col gap-3 bg-gray-100 hover:bg-gray-200 transition-all ease-out duration-300 cursor-pointer p-2 rounded-md'>
        <Image className='rounded-md w-full' width={200} height={200} src={blog.image} alt='blog'/>
        <h3 className={`text-[#1b1b1b] ${monda.className}`}>{blog.title}</h3>
        <p className={`md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-gray-600 ${monda.className} font-thin`}>{blog.description}</p>
        <p className='flex gap-3 items-center text-gray-700'><span><IoIosTimer /></span> {blog.createdAt}</p>
    </Link>
  )
}

export default BlogItem