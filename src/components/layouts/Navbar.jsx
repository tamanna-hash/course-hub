"use client";

import React, { useState, useEffect } from "react";
import Logo from "../shared/Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import AuthButtons from "../buttons/AuthButtons";
import Theme from "../shared/Theme";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink href={"/blog"}>Blog</NavLink>
      </li>
    </>
  );

  return (
   <div className="fixed top-0 left-0 right-0 z-50 w-full">
     <div className={`backdrop-blur-md transition-all duration-300 ${
       scrolled 
         ? 'bg-slate-700/80 dark:bg-slate-800/80 shadow-lg' 
         : 'bg-transparent'
     }`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <div className="flex-shrink-0">
             <Logo />
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center space-x-2">
             <NavLink href={"/"}>Home</NavLink>
             <NavLink href={"/courses"}>Courses</NavLink>
             <NavLink href={"/about"}>About</NavLink>
             <NavLink href={"/contact"}>Contact</NavLink>
             <NavLink href={"/blog"}>Blog</NavLink>
           </nav>

           {/* Right Side Actions */}
           <div className="hidden lg:flex items-center space-x-4">
             <Theme/>
             <AuthButtons/>
           </div>

           {/* Mobile Menu Button */}
           <div className="lg:hidden flex items-center space-x-2">
             <Theme/>
             <div className="dropdown dropdown-end">
               <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16M4 18h16"
                   />
                 </svg>
               </div>
               <ul
                 tabIndex="-1"
                 className="menu menu-sm dropdown-content bg-slate-700 dark:bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-slate-600"
               >
                 {navlinks}
                 <li className="mt-2 pt-2 border-t border-slate-600">
                   <AuthButtons/>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export default Navbar;
