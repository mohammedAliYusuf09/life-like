import { StaticImageData } from "next/image";
import basCat from '@/public/images/businesscat.jpg'
import foodCat from '@/public/images/foodcat.jpg'
import hero from '@/public/images/hero.jpg'
import mpCat from '@/public/images/mpCat.jpg'
import product from '@/public/images/productcat.jpg'

interface PhotographyBlog {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
    createdAt: string;
  }

const photographyBlogs : PhotographyBlog[] = [
    {
      id: '1',
      image: foodCat,
      title: "Mastering Landscape Photography",
      description: "Explore the art of capturing breathtaking landscapes with tips on composition, lighting, and camera settings.",
      createdAt: "2025-01-14"
    },
    {
      id: '2',
      image: basCat,
      title: "The Secrets to Stunning Portrait Photography",
      description: "Learn how to take captivating portraits by mastering natural light, posing techniques, and lens selection.",
      createdAt: "2025-01-14"
    },
    {
      id: '3',
      image: foodCat,
      title: "Street Photography: Capturing Stories in Motion",
      description: "Discover how to find inspiration in the chaos of city streets and create compelling street photography.",
      createdAt: "2025-01-14"
    },
    {
      id: '4',
      image: hero,
      title: "A Guide to Wildlife Photography",
      description: "Get closer to nature with tips on capturing stunning wildlife photos while respecting the environment.",
      createdAt: "2025-01-14"
    },
    {
      id: '5',
      image: mpCat,
      title: "Astrophotography: Shooting the Night Sky",
      description: "Delve into the magical world of astrophotography with advice on gear, settings, and planning.",
      createdAt: "2025-01-14"
    },
    {
      id: '6',
      image: product,
      title: "Getting Started with Macro Photography",
      description: "Unveil the beauty of tiny details by learning the essentials of macro photography techniques and equipment.",
      createdAt: "2025-01-14"
    }
  ];

export default photographyBlogs;