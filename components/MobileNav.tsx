"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import Logo from '@/public/images/logo.png';
import { BsMenuButton } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    setIsOpen(true);
    gsap.to(navRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
  };

  const closeMenu = () => {
    setIsOpen(false);
    gsap.to(navRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Menu button */}
      <div className="flex items-center justify-between px-4 h-[60px]  mx-auto border-b border-gray-200 md:hidden">
        <div>
          <Image src={Logo} width={90} alt="LOGO" />
        </div>
        <button onClick={openMenu} className="text-black">
        <BsMenuButton />
        </button>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className="mobile-nav bg-[#272727]"
        style={{ transform: "translateX(100%)" }} // Start off-screen from the right
      >
        <span className="fixed top-4 right-4 text-xl hover:text-[#b0b842] duration-200" onClick={closeMenu}><RxCrossCircled /></span>
        <ul>
          <li className="font-bold hover:text-[#b0b842] duration-200">
            <Link href="/" onClick={closeMenu}>{'Life Like'}</Link>
          </li>
          <div className="cursor-pointer group ">
            <p className="mb-6  duration-200 hover:text-[#b0b842]">Business</p> 
            <div className="ml-2 text-sm hidden group-hover:block transition-all duration-200">
              <li className="hover:text-[#b0b842]"> <Link href={'/branding'}  onClick={closeMenu}>Branding Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/food'}  onClick={closeMenu}>Food Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/restaurant'}  onClick={closeMenu}>Restaurant Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/product'}  onClick={closeMenu}>Product Photography</Link></li>
            </div>
          </div>
          <div className="cursor-pointer group ">
            <p className="mb-6  duration-200 hover:text-[#b0b842]">People</p> 
            <div className="ml-2 text-sm hidden group-hover:block transition-all duration-200">
              <li className="hover:text-[#b0b842]"> <Link href={'/wedding'}  onClick={closeMenu}>Wedding Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/family'}  onClick={closeMenu}>Family Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/headshot'}  onClick={closeMenu}>Headshot Photography</Link></li>
              <li className="hover:text-[#b0b842]"> <Link href={'/newborn'}  onClick={closeMenu}>Newborn Photography</Link></li>
            </div>
          </div>
          <li className="hover:text-[#b0b842] duration-200">
            <Link href={"/gallery"} onClick={closeMenu}>Blog</Link>
          </li>
          <li className="hover:text-[#b0b842] duration-200">
            <Link href={"/contact"} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay when the menu is open */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <style jsx>{`
        .menu-button {
          font-size: 1.5rem;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0; /* Stick the menu to the right */
          width: 250px;
          height: 100%;
          background: #ffffff;
          padding: 2rem 1rem;
          z-index: 1000;
          color: #222222;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2); /* Shadow on the left side */
        }

        .mobile-nav ul {
          list-style: none;
          padding: 0;
        }

        .mobile-nav li {
          margin-bottom: 1.5rem;
        }

        .mobile-nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 500;
        }

        @media (min-width: 768px) {
          .menu-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNav;
