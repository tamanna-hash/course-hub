"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// const NavLink = ({href,children}) => {
//     const pathname=usePathname()
//     return (
//         <Link className={`${pathname.startsWith(href)&& "text-primary underline underline-offset-2"} font-medium`} href={href} >{children}</Link>
//     );
// };

// export default NavLink;
const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // Use exact match for root '/', otherwise startsWith for others
  const isActive =
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? 'text-primary underline underline-offset-2' : ''} font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
