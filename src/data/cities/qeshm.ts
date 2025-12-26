import heroImage from "../../images/city/qeshm/hero.jpg";
import descriptionImage from "../../images/city/qeshm/description.jpg";
import featured1 from "../../images/city/qeshm/featured-1.jpg";
import featured2 from "../../images/city/qeshm/featured-2.jpg";
import featured3 from "../../images/city/qeshm/featured-3.jpg";
import gallery1 from "../../images/city/qeshm/gallery-1.jpg";
import gallery2 from "../../images/city/qeshm/gallery-2.jpg";
import gallery3 from "../../images/city/qeshm/gallery-3.jpg";
import gallery4 from "../../images/city/qeshm/gallery-4.jpg";

export const qeshm = {
  slug: "qeshm",
  title: "Qeshm Island",
  heroImage,
  descriptionTitle: "Qeshm Island",
  descriptionText:
    "Qeshm is the largest island in the Persian Gulf, known for its raw natural beauty, geological wonders like the Chahkooh Canyon and Hara mangrove forests, and unique local culture. It’s a free trade zone, attracting both tourists and traders, and offers a more authentic and quiet alternative to more commercial destinations.",
  descriptionImage,
  featured: [
    {
      title: "Stars Valley",
      description:
        "Scenic natural area featuring distinctive canyons, gorges & rock formations shaped by erosion.",
      img: featured1,
      alt: "Stars Valley",
    },
    {
      title: "Chahkooh Canyon",
      description:
        "A geological landmark with rain-carved rock formations listed as a UNESCO geopark.",
      img: featured2,
      alt: "Chahkooh Canyon",
    },
    {
      title: "Hengam Island",
      description:
        "Island with beaches of glittery sand, dolphins playing in turquoise water & markets for handicrafts.",
      img: featured3,
      alt: "Hengam Island",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Geological landscapes of Qeshm Island",
      text: "Qeshm is Iran’s largest island and a UNESCO Global Geopark, known for cliffs, canyons, and mangroves. It offers a raw, natural experience unlike anywhere else in the country.",
    },
    { src: gallery2, alt: "Chahkooh Canyon formations" },
    { src: gallery3, alt: "Hara mangrove forests in Qeshm" },
    { src: gallery4, alt: "Hengam Island coastline" },
  ],
};
