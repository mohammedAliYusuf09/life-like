import React from 'react'
import BrandImage from '@/public/images/brandingImage.jpg'
import basCat from '@/public/images/businesscat.jpg'
import foodCat from '@/public/images/foodcat.jpg'
import hero from '@/public/images/hero.jpg'
import mpCat from '@/public/images/mpCat.jpg'
import product from '@/public/images/productcat.jpg'
import ImageGrid from '@/components/ImageGrid'
import Link from 'next/link'

async function CatPage({params} : {
  params: Promise<{ cat: string }>
}) {
  let images = [
    BrandImage, basCat, foodCat, hero, mpCat, product
  ];
  const filters : string[] = ["Food", "Restaurant", "Business", "Headshots", "Family","Newborn", "Wedding"];

  const cat = (await params).cat;

  if (cat === 'Business') {
    images = [foodCat, hero, mpCat, product, BrandImage, basCat]
  }

return (
  <>
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto md:my-6 lg:my-6 xl:my-8 2xl:my-10'>
      <div className='flex justify-start gap-4 flex-wrap'>
          {filters.map((filter, index) => (
              <Link href={`/portfolio/${filter}`} key={index} className={`text-base sm:text-lg md:text-xl bg-gray-100 px-3 py-1 border border-gray-200 rounded hover:bg-gray-300 hover:border-gray-400 ${cat === filter ? 'bg-gray-200 border border-gray-400':''}`}>
                  {filter}
              </Link>
          ))}
      </div>
    </div>
    <ImageGrid images={images}/>
  </>
)
}

export default CatPage;