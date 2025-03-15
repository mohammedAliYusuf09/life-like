import React from 'react'
import BlogItem from './BlogItem'
import { Maven_Pro } from 'next/font/google';
import blogs from '@/data/staticData';



const mavenPro = Maven_Pro({
  subsets: ['latin'], 
  weight: '600', 
});

function Blogs() {
  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto py-8'>
        <h2 className={`${mavenPro.className} text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-[#898F2C] py-4`}>Amaizing Blogs</h2>
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-4'>
            {blogs.map(blog=>{
              return <BlogItem key={blog.id} blog={blog}/>;
            })}
        </div>
    </div>
  )
}

export default Blogs