import heroImage from "../../images/city/yazd/hero.jpg";
import descriptionImage from "../../images/city/yazd/description.jpg";
import featured1 from "../../images/city/yazd/featured-1.jpg";
import featured2 from "../../images/city/yazd/featured-2.jpg";
import featured3 from "../../images/city/yazd/featured-3.png";
import gallery1 from "../../images/city/yazd/gallery-1.jpg";
import gallery2 from "../../images/city/yazd/gallery-2.jpg";
import gallery3 from "../../images/city/yazd/gallery-3.png";
import gallery4 from "../../images/city/yazd/gallery-4.jpg";

export const yazd = {
  slug: "yazd",
  title: "Yazd",
  heroImage,
  descriptionTitle: "Yazd",
  descriptionText:
    "Yazd is a UNESCO-listed desert city famed for its windcatchers, mudbrick buildings, and deep Zoroastrian heritage. It’s one of the oldest continuously inhabited cities in the world, where tradition lives on through its ancient qanats and fire temples. The city’s unique architecture is perfectly adapted to the desert climate, making it a symbol of resilience and ingenuity.",
  descriptionImage,
  featured: [
    {
      title: "Amir Chakhmaq Complex",
      description: "A striking square with illuminated arches and shops.",
      img: featured1,
      alt: "Amir Chakhmaq Complex",
    },
    {
      title: "Dowlat Abad Garden",
      description: "Famous for its towering windcatcher and tranquil greenery.",
      img: featured2,
      alt: "Dowlat Abad Garden",
    },
    {
      title: "Yazd Water Museum",
      description: "Interactive exhibits on qanats and desert water systems.",
      img: featured3,
      alt: "Yazd Water Museum",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Windcatchers and historic alleys of Yazd",
      text: "Windcatchers, alleys, and ancient heritage woven into the sunrises.",
    },
    { src: gallery2, alt: "Traditional mudbrick architecture in Yazd" },
    { src: gallery3, alt: "Dowlat Abad windcatcher in Yazd" },
    { src: gallery4, alt: "Old town rooftops of Yazd" },
  ],
};
