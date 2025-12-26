import heroImage from "../../images/city/kerman/hero.jpg";
import descriptionImage from "../../images/city/kerman/description.jpg";
import featured1 from "../../images/city/kerman/featured-1.png";
import featured2 from "../../images/city/kerman/featured-2.png";
import featured3 from "../../images/city/kerman/featured-3.png";
import gallery1 from "../../images/city/kerman/gallery-1.jpg";
import gallery2 from "../../images/city/kerman/gallery-2.jpg";
import gallery3 from "../../images/city/kerman/gallery-3.jpg";
import gallery4 from "../../images/city/kerman/gallery-4.jpg";

export const kerman = {
  slug: "kerman",
  title: "Kerman",
  heroImage,
  descriptionTitle: "Kerman",
  descriptionText:
    "Kerman is a desert city with a long history of trade, known for its majestic Ganjali Khan complex, ancient citadels, and rich carpet-weaving tradition. It serves as a gateway to the Lut Desert, one of the hottest places on Earth. The city's isolation has preserved its unique character, making it a gem of southeastern Iran.",
  descriptionImage,
  featured: [
    {
      title: "Ganjali Khan Complex",
      description: "Historic bathhouse, bazaar, and square in the city center.",
      img: featured1,
      alt: "Ganjali Khan Complex",
    },
    {
      title: "Shahdad Desert (Kaluts)",
      description: "Surreal wind-carved formations, accessible for day trips.",
      img: featured2,
      alt: "Shahdad Desert Kaluts",
    },
    {
      title: "Fat’h Abad Garden",
      description:
        "Restored Qajar-era mansion & garden with tree-lined paths & a long reflecting pool.",
      img: featured3,
      alt: "Fat’h Abad Garden",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Desert landscapes of Kerman",
      text: "Deserts, fortresses, and landscapes that feel like stepping into another world.",
    },
    { src: gallery2, alt: "Ganjali Khan Complex architecture" },
    { src: gallery3, alt: "Kaluts formations near Shahdad" },
    { src: gallery4, alt: "Fat’h Abad Garden reflecting pool" },
  ],
};
