"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // Use exact match for root '/', otherwise startsWith for others
  const isActive =
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`
        px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
        ${isActive 
          ? 'bg-white/20 text-white shadow-md backdrop-blur-sm' 
          : 'text-white/80 hover:bg-white/10 hover:text-white'
        }
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
