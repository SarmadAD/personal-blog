"use client";

import { motion } from "framer-motion";
import React from "react";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: 1.2,
          duration: 3,
        },
      }}
      className="text-center font-roboto font-light text-base bg-[#1C1C1C] mt-4 p-3 rounded-xl border border-card-border-color"
    >
      Developed by Sarmad Ahmad
    </motion.div>
  );
}

export default Footer;
