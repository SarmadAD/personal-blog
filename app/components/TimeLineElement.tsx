import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { BlogPostProps } from "../../Interfaces/BlogPostProps";
import Image from "next/image";

interface Props {
  blogPost: BlogPostProps;
}

function TimeLineElement({ blogPost: { id, title, shortDescription, publishDate, image } }: Props) {
  return (
    <VerticalTimelineElement
      key={id}
      contentStyle={{ background: "#222222", color: "#fff", paddingLeft: "0", paddingTop: "0", paddingBottom: "0" }}
      contentArrowStyle={{ borderRight: "7px solid  #222222" }}
      date={publishDate}
      iconStyle={{ background: "#222222", color: "#fff" }}
    >
      <div className="flex gap-5">
        <Image src={image} alt="Image of post" className="rounded-l-md" />
        <div className="flex-col p-3">
          <h3 className="font-bold">{title}</h3>
          <p className="font-light">{shortDescription}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default TimeLineElement;
