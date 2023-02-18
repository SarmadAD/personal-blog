"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: 0.3,
          duration: 3,
        },
      }}
      className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl flex font-roboto items-center mb-6 border border-card-border-color"
    >
      <div className="w-1/3 text-left font-bold">
        <Link href="/">Sarmad Ahmad</Link>
      </div>
      <div className="flex justify-between w-1/3 ml-20 font-light">
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
    </motion.nav>
  );
}
