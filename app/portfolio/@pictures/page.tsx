import FilterPortfolio from '@/components/FilterPortfolio'
import React from 'react'
import BrandImage from '@/public/images/brandingImage.jpg'
import basCat from '@/public/images/businesscat.jpg'
import foodCat from '@/public/images/foodcat.jpg'
import hero from '@/public/images/hero.jpg'
import mpCat from '@/public/images/mpCat.jpg'
import product from '@/public/images/productcat.jpg'
import ImageGrid from '@/components/ImageGrid'

function PicturesPage() {

    const images = [
        BrandImage, basCat, foodCat, hero, mpCat, product
      ];
  return (
    <>
        <FilterPortfolio/>
        <ImageGrid images={images}/>
    </>
  )
}

export default PicturesPage;