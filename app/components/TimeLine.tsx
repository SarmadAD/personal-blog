"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { examplePosts } from "../db/ExampleBlogData";
import TimeLineElement from "./TimeLineElement";

function TimeLine() {
  return (
    <div className="font-roboto">
      <VerticalTimeline>
        {examplePosts
          .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate))
          .map((examplePost) => (
            <TimeLineElement key={examplePost.id} blogPost={examplePost} />
          ))}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
