import { create } from "zustand";
import { BlogPostProps } from "../../Interfaces/BlogPostProps";
import { examplePosts } from "../db/ExampleBlogData";

type BlogStore = {
  blogPosts: BlogPostProps[];
  setBlogPosts: () => void;
  getBlogPost: (id: string) => BlogPostProps;
};

const useBlogStore = create<BlogStore>()((set, get) => ({
  blogPosts: examplePosts,
  setBlogPosts() {
    set(() => ({
      blogPosts: examplePosts,
    }));
  },
  getBlogPost(id) {
    return get().blogPosts.find((blogPost) => blogPost.id === parseInt(id));
  },
}));

export default useBlogStore;
