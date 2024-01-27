import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About",
  description: "Contact description",
};

export default function AboutPage() {
  return (
    <div>
      <div className="w-full h-[10%] flex justify-center items-center bg-blue-50 text-black font-semibold">ABOUT</div>
      <div className="flex mt-5">
        <div className="hidden sm:inline-flex">
          <Image src={"/about.png"} width={500} height={500} priority alt="about image" />
        </div>
        <div className="sm:w-[50%] w-full pt-20 sm:pl-20 px-3 sm:px-0 sm:text-center leading-10 text-sm sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident aperiam ea assumenda aliquid nobis numquam quasi, id dolores, ex doloribus autem cumque
          laborum, deserunt perspiciatis illum ipsam quae adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores quae laborum dicta architecto tempora
          accusamus delectus quo adipisci! Eaque nemo omnis ab tempore consectetur quae recusandae molestias blanditiis cumque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. At repellat, aliquid ducimus nobis nemo ea odit reprehenderit placeat libero explicabo ipsum iure impedit asperiores temporibus reiciendis et? Culpa, distinctio
          sed!
        </div>
      </div>
    </div>
  );
}
