import React from 'react'
import Blogs from '@/data/staticData';
import Image, { StaticImageData } from 'next/image';
import { notFound } from 'next/navigation';
import { Meera_Inimai } from 'next/font/google';
import { Monda } from 'next/font/google';

interface Blog {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
    createdAt: string;
  }


  const monda = Monda({
    subsets: ['latin'], 
    weight: '400', 
  });

  
  const meeraInimai = Meera_Inimai({
    subsets: ['latin'],
    weight: ['400']
  });

async function page({params} : {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;

    function findBlogById(slug: string): Blog | undefined {
        return Blogs.find((blog) => blog.id === slug);
    }
    const blog = findBlogById(slug)

    if (!blog) {
        notFound()
    } 
    return (
        <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto flex flex-col gap-2 py-4'>
            <Image className='w-full py-4' src={blog.image} height={400} width={600} alt={blog.title}/>
            <p className={`${meeraInimai.className} text-gray-600 text-base xl:text-lg`}>Published on: {blog.createdAt}</p>
            <h1 className={`text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-[#3c3d2c] ${meeraInimai.className}`}>{blog.title}</h1>
            <p className={`md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-[#3a3a37] mt-2 ${monda.className}`}>{blog.description}</p>
        </div>
    )
}

export default page