"use client"
import Image from "next/image";
import SearchBox from "./searchbox";
import ShoppingBagIcon from "./cart_Icon";
import { useState } from "react";
import WishlistIcon from "./wishlist_Icon";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-[60px] px-4">
        
        {/* Logo */}
        <a className="flex items-center text-[#1111] mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50.54} />
        </a>

        {/* Desktop menu */}
        <nav className="hidden lg:flex lg:w-full space-x-8 items-center xl:ml-[18rem] lg:ml-4">
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">New & Featured</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Men</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Women</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Kids</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Sale</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">SNKRS</a>
        </nav>
        
        {/* Mobile menu button (Hamburger) */}
        <div className="flex items-center space-x-4">
          <SearchBox />
          <span onClick={toggleMenu} className="p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#111] text-[17px] lg:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </span>
          <WishlistIcon/>
          <ShoppingBagIcon />
        </div>
      </div>

      {/* Mobile menu - Links visible on small screens */}
      <div
        className={`lg:hidden w-full space-y-4 mt-4 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center">
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">New & Featured</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Men</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Women</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Kids</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">Sale</a>
          <a className="font-helvetica font-medium text-[17px] hover:text-gray-900">SNKRS</a>
        </nav>
      </div>
    </header>
  );
}
