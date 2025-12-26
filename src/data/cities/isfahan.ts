import heroImage from "../../images/city/isfahan/hero.jpeg";
import descriptionImage from "../../images/city/isfahan/description.jpg";
import featured1 from "../../images/city/isfahan/featured-1.jpg";
import featured2 from "../../images/city/isfahan/featured-2.jpg";
import featured3 from "../../images/city/isfahan/featured-3.jpg";
import gallery1 from "../../images/city/isfahan/gallery-1.jpg";
import gallery2 from "../../images/city/isfahan/gallery-2.jpeg";
import gallery3 from "../../images/city/isfahan/gallery-3.jpeg";
import gallery4 from "../../images/city/isfahan/gallery-4.jpeg";

export const isfahan = {
  slug: "isfahan",
  title: "Isfahan",
  heroImage,
  descriptionTitle: "Isfahan",
  descriptionText:
    "Isfahan is often called “Half the World” for its stunning architecture, rich history, and artistic legacy. Famous for its grand mosques, bridges, and the iconic Naqsh-e Jahan Square.",
  descriptionImage,
  featured: [
    {
      title: "Naqsh Jahan Square",
      description:
        "A grand plaza surrounded by mosques, palaces, and shops, ideal for strolling.",
      img: featured1,
      alt: "Naqsh Jahan Square",
    },
    {
      title: "Chehel Sotoun Palace",
      description: "Historic pavilion with gardens and vibrant wall paintings.",
      img: featured2,
      alt: "Chehel Sotoun Palace",
    },
    {
      title: "Zayandeh River Bridges",
      description:
        "Iconic bridges like Si‑o‑se-pol, beautifully lit for evening walks.",
      img: featured3,
      alt: "Zayandeh River Bridges",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Naqsh-e Jahan Square in Isfahan",
      text: "Each corner feels like a masterpiece, where history and beauty speak the same language.",
    },
    { src: gallery2, alt: "Historic architecture of Isfahan" },
    { src: gallery3, alt: "Evening view of Isfahan city" },
    { src: gallery4, alt: "Persian design details in Isfahan" },
  ],
};
