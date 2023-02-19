"use client";

import { motion } from "framer-motion";
import React from "react";
import useBlogStore from "../store/store";
import LatestPost from "./latestPost";

export default function LatestPosts() {
  const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();
  const latestsPosts = useBlogStore((state) => state.blogPosts).filter((examplePost) => {
    const date = new Date(examplePost.publishDate);
    const localTime = date.toLocaleString("default");
    if (new Date(localTime) >= addMonths(new Date(), -3) && new Date(localTime) <= new Date()) {
      return examplePost;
    }
  });

  function addMonths(input: Date, months: number) {
    const date = new Date(input);
    date.setDate(1);
    date.setMonth(date.getMonth() + months);
    date.setDate(Math.min(input.getDate(), getDaysInMonth(date.getFullYear(), date.getMonth() + 1)));
    return date;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: 0.9,
          duration: 3,
        },
      }}
      className="bg-[#1C1C1C] pr-8 pl-9 pt-4 pb-4 rounded-xl border border-[#6a666669]"
    >
      <h1 className="text-4xl font-roboto mb-6">Latest posts</h1>
      <div className="flex flex-wrap gap-[3.7em]">
        {latestsPosts.length > 0 ? (
          latestsPosts.map((examplePost) => <LatestPost key={examplePost.id} latestPostProps={examplePost} />)
        ) : (
          <h2>No blog posts published lately.</h2>
        )}
      </div>
    </motion.div>
  );
}
