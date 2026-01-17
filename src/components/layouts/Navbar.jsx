import React from "react";
import Logo from "../shared/Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import AuthButtons from "../buttons/AuthButtons";
import Theme from "../shared/Theme";

const Navbar = () => {
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
    <div className="navbar fixed top-0 max-w-11/12 mx-auto left-0 right-0 bg-base-100/90 z-50 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-200 dark:border-gray-600"
          >
            {navlinks}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Theme/>
        <AuthButtons/>
      </div>
    </div>
  );
};

export default Navbar;
