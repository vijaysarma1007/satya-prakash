"use client";
import React, { useState } from "react";
import Services from "./Services";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Blog from "./Blog";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Menu() {
  const [showOptions, setShowOptions] = useState(false);

  function closeWindows() {
    setShowOptions(!showOptions);
  }
  return (
    <>
      <div className="sm:hidden  sm:w-[80%] " onMouseLeave={() => setShowOptions(false)}>
        <GiHamburgerMenu className="sm:hidden relative" size={25} onClick={closeWindows} />
        {showOptions && (
          <div className="flex absolute right-0 items-start min flex-col w-[40%]  bg-gray-100 text-black gap-6 min-h-screen pl-4 pt-4 overf">
            <div className="flex w-full justify-evenly">
              <DarkModeSwitch />
              <RxCross2 size={25} onClick={closeWindows} />
            </div>
            <Services />
            <Blog />
            <div>
              <Link href={"/about"} onClick={() => setShowOptions(false)}>
                About
              </Link>
            </div>
            <div>Admin</div>
            <div>Training</div>
            <div>Log in</div>
            <div>Contact</div>
          </div>
        )}
      </div>
      <div className="hidden sm:flex sm:w-[100%] bg-gray-100 sm:bg-transparent sm:justify-evenly">
        <Services />
        <Blog />
        <div>
          <Link href={"/about"}>About</Link>
        </div>
        <div>Training</div>
        <div>Admin</div>
        <div>Log in</div>
        <div>Contact</div>
        <DarkModeSwitch />
      </div>
    </>
  );
}
