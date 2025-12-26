import heroImage from "../../images/city/rasht/hero.jpg";
import descriptionImage from "../../images/city/rasht/description.jpg";
import featured1 from "../../images/city/rasht/featured-1.png";
import featured2 from "../../images/city/rasht/featured-2.png";
import featured3 from "../../images/city/rasht/featured-3.png";
import gallery1 from "../../images/city/rasht/gallery-1.jpg";
import gallery2 from "../../images/city/rasht/gallery-2.jpg";
import gallery3 from "../../images/city/rasht/gallery-3.jpg";
import gallery4 from "../../images/city/rasht/gallery-4.jpg";

export const rasht = {
  slug: "rasht",
  title: "Rasht",
  heroImage,
  descriptionTitle: "Rasht",
  descriptionText:
    "Rasht is the capital of Gilan province and a vibrant gateway to Iran’s lush north. Known as the “City of Rain,” it’s famous for its rich Gilaki cuisine, traditional markets, and close proximity to the Caspian Sea and scenic villages like Masuleh. Rasht is culturally unique, with a relaxed coastal vibe and deep roots in Iran’s northern heritage.",
  descriptionImage,
  featured: [
    {
      title: "Shahrdari Square",
      description: "Central hub with fountains and cafés.",
      img: featured1,
      alt: "Shahrdari Square",
    },
    {
      title: "Saravan Forest Park",
      description: "Family picnic spot with boating facilities.",
      img: featured2,
      alt: "Saravan Forest Park",
    },
    {
      title: "Rasht Bazaar",
      description: "Famous for food stalls and local crafts.",
      img: featured3,
      alt: "Rasht Bazaar",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Rasht food culture and green landscapes",
      text: "Known as the culinary capital of Iran, Rasht is famous for its rich food culture, lush green surroundings, and access to the Caspian Sea.",
    },
    { src: gallery2, alt: "Shahrdari Square in Rasht" },
    { src: gallery3, alt: "Saravan Forest near Rasht" },
    { src: gallery4, alt: "Traditional market in Rasht" },
  ],
};
