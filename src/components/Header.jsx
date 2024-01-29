import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="sticky top-0 w-full dark:bg-gray-100 bg-gray-700  dark:text-black flex  justify-evenly items-center sm:pl-10">
      <Link href={"/"} className="cursor-pointer ">
        <Image src="/logo.png" width={125} height={125} alt="logo of satya prakash" priority />
      </Link>
      <Menu />
    </header>
  );
}
