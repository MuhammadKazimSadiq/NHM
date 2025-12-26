// src/data/cities/qum.ts

import heroImage from "../../images/city/qum/hero.jpg";
import descriptionImage from "../../images/city/qum/description.png";
import featured1 from "../../images/city/qum/featured-1.png";
import featured2 from "../../images/city/qum/featured-2.png";
import featured3 from "../../images/city/qum/featured-3.png";
import gallery1 from "../../images/city/qum/gallery-1.png";
import gallery2 from "../../images/city/qum/gallery-2.jpg";
import gallery3 from "../../images/city/qum/gallery-3.jpg";
import gallery4 from "../../images/city/qum/gallery-4.jpg";

export const qum = {
  slug: "qum",
  title: "Qum",
  heroImage,
  descriptionTitle: "Qum",
  descriptionText:
    "Qum is one of the holiest cities in Iran, known as a major center for Shi'a Islamic scholarship and pilgrimage. It houses the shrine of Lady Fatima al-Ma'sumah (sa), the sister of Imam al-Riḍā (as), attracting millions of visitors each year. The city is also home to the largest Shi'a seminary in the world, where thousands of scholars and students study Islamic sciences. With its deep religious significance and spiritual atmosphere, Qum holds a central place in the heart of Shi'a Muslims globally.",
  descriptionImage,
  featured: [
    {
      title: "Qom Bazaar",
      description:
        "A grand plaza surrounded by mosques, palaces, and shops, ideal for strolling.",
      img: featured1,
      alt: "Qom Bazaar",
    },
    {
      title: "Try flavourful regional dishes",
      description: "Historic pavilion with gardens and vibrant wall paintings.",
      img: featured2,
      alt: "Try flavourful regional dishes",
    },
    {
      title: "Namak (Salt) Lake",
      description:
        "Iconic bridges like Si‑o‑se-pol, beautifully lit for evening walks.",
      img: featured3,
      alt: "Namak (Salt) Lake",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "",
      text: "Qum is a center of Shi’a scholarship and pilgrimage. Visitors come to the shrine of Sayyidah Ma’sumah (sa) where they are filled with a deep sense of peace.",
    },
    { src: gallery2, alt: "" },
    { src: gallery3, alt: "" },
    { src: gallery4, alt: "" },
  ],
};
