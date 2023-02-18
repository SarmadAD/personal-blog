"use client";
import { motion } from "framer-motion";
import React from "react";

function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: 0.6,
          duration: 3,
        },
      }}
      className="bg-[#1c1c1c] pr-9 pl-9 pt-4 pb-4 rounded-xl flex justify-between border border-card-border-color"
    >
      <div className="flex flex-col">
        <h1 className="text-7xl leading-tight mb-8">
          Welcome <br /> to my <br /> blog 👋🏾
        </h1>
        <div className="font-roboto text-xl font-light">
          <p>
            I am a frontend developer by
            <br /> profession, but I also have a passion for gaming <br /> and playing the guitar in my free time.
          </p>
          <br />
          <p>
            Here you will find my thoughts on the latest industry trends,
            <br /> tips and tricks for frontend development.
          </p>
        </div>
      </div>
      <div>{/* <Image src={profilePic} alt="Picture of author" width={350} height={300} className="rounded-xl" /> */}</div>
    </motion.div>
  );
}

export default Welcome;
