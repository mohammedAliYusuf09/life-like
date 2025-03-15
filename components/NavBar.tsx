import React from 'react'
import Logo from '@/public/images/logo.png'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';
import ListItem from './ui/ListItem';

  

function NavBar() {
    const business: { title: string; href: string; description: string }[] = [
        {
          title: " Branding Photography",
          href: "/branding",
          description:
            "A successful brand starts with a strategic understanding of your ideal customer base",
        },
        {
          title: "Food Photography",
          href: "/food",
          description:
            "It’s no secret that food photography can be incredibly impactful. The proper lighting, styling",
        },
        {
          title: "Restaurant Photography",
          href: "restaurant",
          description:
            "It’s no secret that exceptional restaurant photography can transform the way your restaurant is perceived. As chefs often say, “You eat with your eyes first.",
        },
        {
          title: "Product Photography",
          href: "/product",
          description: "Put simply, it’s taking your product and placing it in an engaging scene",
        }
      ]
    const people: { title: string; href: string; description: string }[] = [
        {
          title: "Wedding Photography",
          href: "/wedding",
          description:
            "Congratulations! What an exciting journey you’re embarking on as you tie your lives and the...",
        },
        {
          title: "Family Photography",
          href: "/family",
          description:
            "A family photo session with me isn’t just about the coordinated outfits and looking at the camera",
        },
        {
          title: "Headshot Photography",
          href: "headshot",
          description:
            "A great headshot conveys genuine emotion and authentic personality without looking forced.",
        },
        {
          title: "Newborn Photography",
          href: "/newborn",
          description: "From that very first moment you lay eyes on them, your heart grows two sizes",
        }
      ]

  return (
    <div className='hidden md:block border-b xl:border-b-2 2xl:border-b-4 border-gray-200'>
      <div className='sm:flex items-center justify-between h-[64px] xl:h-[80px] 2xl:h-[100px] md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto'>
        <div className='w-24 xl:w-32 2xl:w-40 cursor-pointer'><Link href={'/'}><Image src={Logo} width={300} alt='LOGO'/></Link></div>
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Business</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {business.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger>People</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {people.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Portfolio
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        <Link className='px-4 py-1 bg-[#9da535] hover:bg-[#8d9432]  text-white font-semibold rounded-sm text-lg xl:text-xl 2xl:text-2xl' href={'/contect'}>Contect</Link>
        </div>
      </div>  

)}

export default NavBar