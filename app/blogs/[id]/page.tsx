import Image from "next/image";
import React from "react";
import { examplePosts } from "../../db/ExampleBlogData";

function BlogPost({ params: { id } }: any) {
  const blogPost = examplePosts.find((examplePost) => examplePost.id === parseInt(id));
  return (
    <div className="font-roboto">
      <Image src={blogPost.image} alt="Blog Post Image" className="h-[500px] rounded-t-lg" />
      <div className="bg-[#222222] p-9 rounded-b-lg">
        <h2 className="text-4xl">{blogPost.title}</h2>
        <div className="flex justify-between">
          <p className="font-thin">{blogPost.shortDescription}</p>
          <p>[Author]</p>
        </div>
        <p className="mt-5">{blogPost.text}</p>
      </div>
    </div>
  );
}

export default BlogPost;
