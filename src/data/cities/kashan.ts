import heroImage from "../../images/city/kashan/hero.jpg";
import descriptionImage from "../../images/city/kashan/description.jpg";
import featured1 from "../../images/city/kashan/featured-1.jpg";
import featured2 from "../../images/city/kashan/featured-2.jpg";
import featured3 from "../../images/city/kashan/featured-3.jpg";
import gallery1 from "../../images/city/kashan/gallery-1.jpg";
import gallery2 from "../../images/city/kashan/gallery-2.jpg";
import gallery3 from "../../images/city/kashan/gallery-3.jpg";
import gallery4 from "../../images/city/kashan/gallery-4.jpg";

export const kashan = {
  slug: "kashan",
  title: "Kashan",
  heroImage,
  descriptionTitle: "Kashan",
  descriptionText:
    "Kashan is a historic oasis city on the edge of the desert, known for its elegant Qajar-era houses, rosewater distilleries, and traditional Persian gardens such as Fin Garden. With its blend of architecture, history, and deep cultural roots, Kashan offers a quieter, more intimate look into Iran’s past. It is also a key stop for pilgrims and travelers on the route between Qum and Isfahan.",
  descriptionImage,
  featured: [
    {
      title: "Fin Garden",
      description:
        "A classic Persian garden featuring flowing fountains, ancient trees, and historic pavilions.",
      img: featured1,
      alt: "Fin Garden",
    },
    {
      title: "Tabatabaei House",
      description:
        "An elegant historic mansion with beautiful courtyards, stucco work, and stained-glass windows.",
      img: featured2,
      alt: "Tabatabaei House",
    },
    {
      title: "Bazaar of Kashan",
      description:
        "A traditional covered bazaar offering local handicrafts, spices, and famous Kashan sweets.",
      img: featured3,
      alt: "Bazaar of Kashan",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Historic houses of Kashan",
      text: "History wrapped in elegance, from desert architecture to timeless historic homes.",
    },
    { src: gallery2, alt: "Fin Garden in Kashan" },
    { src: gallery3, alt: "Traditional courtyard house in Kashan" },
    { src: gallery4, alt: "Bazaar architecture in Kashan" },
  ],
};
