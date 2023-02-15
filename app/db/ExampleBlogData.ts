import { BlogPostProps } from "../../Interfaces/BlogPostProps";
import lastPostExample from "../../public/assets/lastPostExampleBig.jpg";
import snow from "../../public/assets/snow.png";
import drone from "../../public/assets/drone.png";
import landscape from "../../public/assets/landscape.png";
import trees from "../../public/assets/trees.png";

export const examplePosts: BlogPostProps[] = [
  {
    id: 1,
    title: "Vacation",
    publishDate: "07/2023",
    text: "I had always dreamed of visiting America, and finally, after months of planning, my dream became a reality. I packed my bags and headed for the airport, filled with excitement at the thought of all the new experiences I was about to have.My first stop was New York City, where I visited the Statue of Liberty, Central Park, and Times Square. I also went to see a Broadway show, which was a highlight of my trip. Next, I flew to California to visit Los Angeles and San Francisco. I strolled along the Hollywood Walk of Fame, visited the Golden Gate Bridge, and ate clam chowder in a sourdough bread bowl at Fisherman's Wharf.Finally, I ended my trip with a visit to Las Vegas, where I saw the Bellagio fountains, watched a Cirque du Soleil show, and tried my luck at the slot machines. As my vacation came to an end, I realized that I had fallen in love with America and all the wonderful experiences it had to offer. I knew that I would cherish these memories forever.",
    shortDescription: "My first vacation in America",
    image: lastPostExample,
  },
  {
    id: 2,
    title: "Snow",
    publishDate: "02/2021",
    text: "The world was silent, and everything was covered in white as far as the eye could see. The snowflakes were falling gently from the sky, and each one was unique in its own way. The snow was cold and crisp under my boots as I made my way through the winter wonderland. I could feel the chill in the air as I took in the serene beauty that surrounded me. The snow was a peaceful blanket that seemed to erase all of the world's troubles, if only for a little while. It was a reminder to slow down and appreciate the quiet moments in life.",
    shortDescription: "The snow glistened in the morning sunlight",
    image: snow,
  },
  {
    id: 3,
    title: "Drone",
    publishDate: "08/2020",
    text: "The drone whizzed by as I expertly controlled it from my phone. It was like having a bird's-eye view of the world, and it was exhilarating. I could see everything from above, the houses, the trees, the roads, all in great detail. It felt like I was flying, and nothing could stop me. I took the drone higher, and I could see for miles in every direction. It was an amazing experience, and I felt like I was in a whole new world. The drone was my window to the sky, and it gave me a sense of freedom that I had never felt before.",
    shortDescription: "The drone hovered silently in the clear blue sky",
    image: drone,
  },
  {
    id: 4,
    title: "Landscape",
    publishDate: "06/2020",
    text: "The landscape was a painting come to life, with rolling hills, and a colorful sunset in the distance. The sun was setting, and the sky was a beautiful shade of orange and pink. The grass was a deep green, and the flowers were in full bloom, adding pops of color to the landscape. I could hear the gentle rustling of leaves as a light breeze swept through the area. It was a peaceful moment, and I felt like I was in a dream. The landscape was a reminder of the beauty of nature and how it can leave you breathless.",
    shortDescription: "The landscape was breathtakingly beautiful, like a painting",
    image: landscape,
  },
  {
    id: 5,
    title: "New York",
    publishDate: "10/2019",
    text: "New York City was a sight to behold, with towering skyscrapers and bustling streets. It was a city that never slept, and there was always something to do. I visited the Empire State Building, the Statue of Liberty, and Times Square, and they all lived up to their reputation. The energy of the city was contagious, and I felt alive with every step I took. I tried New York-style pizza and bagels, which were amazing. There were people from all walks of life, and it was a melting pot of cultures. It was the city that never slept, and I never wanted to leave. New York City was an experience I would never forget.",
    shortDescription: "New York: The city that never sleeps",
    image: trees,
  },
];
