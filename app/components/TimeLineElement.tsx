import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { BlogPostProps } from "../../Interfaces/BlogPostProps";
import Image from "next/image";
import Link from "next/link";

interface Props {
  blogPost: BlogPostProps;
}

function TimeLineElement({ blogPost: { id, title, shortDescription, publishDate, image } }: Props) {
  const date = new Date(publishDate);
  const month = date.toLocaleString("default", { month: "short" });
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#222222",
        color: "#fff",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        border: "solid 1px var(--border-color)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #222222" }}
      date={`${month} ${date.getFullYear()}`}
      iconStyle={{ background: "#222222", color: "#fff" }}
    >
      <Link href={`/blogs/${id}`}>
        <div className="flex gap-5 min-h-[128px]">
          <Image src={image} alt="Image of post" className="rounded-l-md" width={150} height={150} />
          <div className="flex-col p-3">
            <h3 className="font-bold">{title}</h3>
            <p className="!font-thin">{shortDescription}</p>
          </div>
        </div>
      </Link>
    </VerticalTimelineElement>
  );
}

export default TimeLineElement;
