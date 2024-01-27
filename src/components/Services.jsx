"use client";

import React, { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

export default function Services() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="cursor-pointer sm:w-24 group" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
      <div className="relative flex  sm:gap-4 group-hover:font-semibold">
        Services <span className="ml-2">{showMenu ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}</span>
      </div>
      <div className={`sm:absolute ${!showMenu && "hidden"} flex flex-col dar: bg-white sm:w-36 gap-4 p-3 text-black group-hover:bg-red-50 rounded-lg shadow-lg `}>
        <div className="hover:font-semibold">service 1</div>
        <div className="hover:font-semibold">service 2</div>
        <div className="hover:font-semibold">service 3</div>
        <div className="hover:font-semibold">service 4</div>
      </div>
    </div>
  );
}
