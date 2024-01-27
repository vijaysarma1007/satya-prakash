import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col w-full min-h-screen sm:dark:bg-gradient-to-r sm:bg-gradient-to-br from-gray-900 to-blue-200  ">
      <div className="sm:w-[50%] w-full flex flex-col justify-center items-center">
        <p className="px-20 pb-20 pt-20 sm:pt-0 sm:text-2xl font-semibold text-white">
          Sarada, ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil velit eligendi dignissimos accusantium? Deleniti qui culpa expedita rem eveniet soluta ipsum minus
          officia fugit voluptatem, quia temporibus corporis? Est.
        </p>
        <div className="flex sm:w-full w-[80%] justify-evenly sm:flex-row flex-col gap-10 sm:gap-0 mb-4">
          <div className="border border-black  rounded-md px-5 py-2 text-xl bg-gray-50 cursor-pointer dark:hover:bg-gray-600 text-center hover:bg-blue-50  hover:text-black dark:hover:text-white dark:text-black">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="border px-5 py-2 rounded-md bg-blue-500 text-xl border-blue-500 cursor-pointer hover:bg-blue-600 text-center text-white">Register</div>
        </div>
      </div>
      <div className="w-[50%] h-full hidden sm:inline-flex items-center justify-center">
        <Image src="/hero.png" width={700} height={600} className="" alt="Picture of Dr. M Satya Parakash" priority />
      </div>
    </div>
  );
}
