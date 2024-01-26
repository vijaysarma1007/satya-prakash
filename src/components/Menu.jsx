"use client";
import React, { useState } from "react";
import Services from "./Services";
import { GiHamburgerMenu } from "react-icons/gi";
import Blog from "./Blog";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Menu() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="sm:w-[80%] ">
      <GiHamburgerMenu className="sm:hidden relative" size={25} onClick={() => setShowOptions(!showOptions)} />
      {showOptions && (
        <div className="sm:hidden flex absolute right-0 items-start min flex-col w-[40%]  bg-gray-100 text-black gap-6 min-h-screen pl-4 pt-4 ">
          <div className="flex w-full justify-center ">
            <DarkModeSwitch />
          </div>
          <Services />
          <Blog />
          <div>About US</div>
          <div>Admin</div>
          <div>Log in</div>
          <div>Contact</div>
        </div>
      )}
      <div className="hidden sm:flex sm:w-[100%] bg-gray-100 text-black sm:bg-transparent sm:justify-between">
        <Services />
        <Blog />
        <div>About US</div>
        <div>Admin</div>
        <div>Log in</div>
        <div>Contact</div>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
