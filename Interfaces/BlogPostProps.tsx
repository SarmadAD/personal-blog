import { StaticImageData } from "next/image";

export interface BlogPostProps {
  id: number;
  title: string;
  shortDescription: string;
  text: string;
  publishDate: string;
  image: StaticImageData;
}
