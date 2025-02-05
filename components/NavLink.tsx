"use client"
// thats why we created separated component only for nav link to make it client side
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props{
    href: string;
    label: string;
    className?: string;
    onClick?: ()=>void;
  }

const NavLink = ({href,label,className}:Props) => {

    // lets check if pathname is active then add active classes
    const pathname = usePathname();
  return (
    <Link href={href}
    className={`py-3 text-gray-700 hover:text-purple transition-colors relative block after:block after:absolute
    after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition
    after:duration-300 after:origin-right after:hover:origin-left ${className} 
      ${
        pathname=== href 
        ? "after:scale-x-100 after:origin-right"
        : "after:scale-x-0 after:origin-left"
       }
    `}
    >
      {label}
    </Link>
  )
}

export default NavLink