import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

import Image from "next/image";
import Services from "./Services";
import Link from "next/link";
import Blog from "./Blog";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="sticky top-0 w-full dark:bg-white bg-gray-500 text-white dark:text-black flex  justify-evenly items-center sm:pr-5">
      <Link href={"/"} className="cursor-pointer ">
        <Image src="/logo.png" width={125} height={125} />
      </Link>
      <Menu />
    </header>
  );
}
