import ImageGrid from '@/components/ImageGrid'
import PageCatHad from '@/components/PageCatHad'
import PageDetails from '@/components/PageDetails'
import BrandImage from '@/public/images/brandingImage.jpg'
import basCat from '@/public/images/businesscat.jpg'
import foodCat from '@/public/images/foodcat.jpg'
import hero from '@/public/images/hero.jpg'
import mpCat from '@/public/images/mpCat.jpg'
import product from '@/public/images/productcat.jpg'
import React from 'react'



function page() {

  

    const images = [
        BrandImage, basCat, foodCat, hero, mpCat, product
      ];
    const heading = 'Crafting Your Brand Image';
    const pharahraph = "Capture the essence of your brand with stunning visuals that tell your unique story. Brand photography goes beyond traditional headshots or product images—it's about showcasing your business personality, values, and vision. Whether you're a small business owner, an entrepreneur, or a creative professional, our tailored brand photography sessions provide high-quality imagery that resonates with your audience, elevates your online presence, and leaves a lasting impression.";
  return (
    <div>
        <PageCatHad title='BUSINESS BRANDING PHOTOGRAPHY' cat='Business' subCat='Branding'/>
        <PageDetails heading={heading} phara={pharahraph} image={BrandImage}/>
        <ImageGrid images={images}/>
    </div>
  )
}

export default page