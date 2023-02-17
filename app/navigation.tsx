import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl flex font-roboto items-center mb-6">
      <div className="w-1/3 text-left font-bold">
        <Link href="/">Sarmad Ahmad</Link>
      </div>
      <div className="flex justify-between w-1/3 font-light">
        <div className="w-1/3">
          <Link href="/about">About</Link>
        </div>
        <div className="w-1/3">
          <Link href="/blogs">Blog</Link>
        </div>
        <div className="w-1/3">
          <Link href="https://github.com/SarmadAD" target="_blank">
            GitHub
          </Link>
        </div>
      </div>
      <div className="w-1/3 text-right">
        <span className="border-2 rounded-full h-10 w-10 inline-block"></span>
      </div>
    </nav>
  );
}
