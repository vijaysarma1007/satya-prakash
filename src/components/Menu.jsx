"use client";
import React, { useState } from "react";
import Services from "./Services";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Blog from "./Blog";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [showOptions, setShowOptions] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);

  function closeWindows() {
    setShowOptions(!showOptions);
  }
  return (
    <>
      <div className=" " onMouseLeave={() => setShowOptions(false)}>
        <GiHamburgerMenu className="sm:hidden relative" size={25} onClick={closeWindows} />
        {showOptions && (
          <div className="flex absolute right-0 items-start min flex-col w-[60%] bg-gray-100 text-black gap-6 pl-4 pt-4 h-[500px] overflow-y-scroll">
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
            <div>
              <Link href={"/contact"} className="cursor-pointer">
                Contact
              </Link>
            </div>
            <div className="w-full text-center underline font-semibold">follow on </div>
            <div className="text-4xl flex cursor-pointer w-full justify-evenly">
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaSquareThreads />
              <FaTwitter />
            </div>

            <Link
              className="flex space-x-2 items-center justify-center border border-green-400 p-2 bg-green-400 hover:bg-green-500 rounded-lg font-semibold mb-4 w-[90%]"
              href="https://wa.me/+918249518465"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25} />
              <span>WhatsApp</span>
            </Link>
          </div>
        )}
      </div>
      <div className="hidden sm:flex sm:w-[100%] bg-gray-100 sm:bg-transparent sm:justify-evenly text-white dark:text-black">
        <Services />
        <Blog />
        <div className={`${pathname === "/about" && "underline"}`}>
          <Link href={"/about"}>About</Link>
        </div>
        <div>Training</div>
        <div>Admin</div>
        <div>Log in</div>
        <div>
          <Link href={"/contact"} className="cursor-pointer">
            Contact
          </Link>
        </div>
        <DarkModeSwitch />
      </div>
    </>
  );
}
