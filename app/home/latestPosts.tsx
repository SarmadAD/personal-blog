import React from "react";
import { examplePosts } from "../db/ExampleBlogData";
import LatestPost from "./latestPost";

export default function LatestPosts() {
  const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();
  const latestsPosts = examplePosts.filter((examplePost) => {
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
    <div className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl">
      <h1 className="text-4xl font-roboto mb-6">Latest posts</h1>
      <div className="flex flex-wrap gap-[3.7em]">
        {latestsPosts.length > 0 ? (
          latestsPosts.map((examplePost) => <LatestPost key={examplePost.id} latestPostProps={examplePost} />)
        ) : (
          <h2>No blog posts published lately.</h2>
        )}
      </div>
    </div>
  );
}
