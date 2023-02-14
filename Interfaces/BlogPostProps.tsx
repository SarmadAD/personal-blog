import { StaticImageData } from "next/image";

export interface BlogPostProps {
  id: number;
  title: string;
  publishDate: string;
  shortDescription: string;
  image: StaticImageData;
}
