"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathname=usePathname()
    return (
        <Link className={`${pathname.startsWith(href)&& "text-primary underline underline-offset-2"} font-medium`} href={href} >{children}</Link>
    );
};

export default NavLink;