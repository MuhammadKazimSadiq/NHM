import heroImage from "../../images/city/tehran/hero.jpg";
import descriptionImage from "../../images/city/tehran/description.jpg";
import featured1 from "../../images/city/tehran/featured-1.jpg";
import featured2 from "../../images/city/tehran/featured-2.png";
import featured3 from "../../images/city/tehran/featured-3.jpg";
import gallery1 from "../../images/city/tehran/gallery-1.jpg";
import gallery2 from "../../images/city/tehran/gallery-2.jpg";
import gallery3 from "../../images/city/tehran/gallery-3.jpg";
import gallery4 from "../../images/city/tehran/gallery-4.jpg";

export const tehran = {
  slug: "tehran",
  title: "Tehran",
  heroImage,
  descriptionTitle: "Tehran",
  descriptionText:
    "Tehran is the bustling capital of Iran and the country’s political, economic, and cultural hub. It’s a city of contrasts—modern skyscrapers and busy highways meet historic bazaars, palaces, and museums. Known for its vibrant energy, diverse population, and views of the Alborz mountains, Tehran offers a glimpse into contemporary Iranian life while holding onto its rich past.",
  descriptionImage,
  featured: [
    {
      title: "Golestan Palace",
      description:
        "A UNESCO site showcasing Qajar‑era art, mirrored halls, and lush gardens",
      img: featured1,
      alt: "Golestan Palace",
    },
    {
      title: "Darband Mountain Walk",
      description:
        "A gentle riverside trail lined with cafés, perfect for fresh air and family outings.",
      img: featured2,
      alt: "Darband Mountain Walk",
    },
    {
      title: "National Museum of Iran",
      description:
        "Explore the richest and largest collection of Iranian antiques in the world, travelling through history",
      img: featured3,
      alt: "National Museum of Iran",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "",
      text: "Iran’s capital is fast-paced and diverse, offering museums, palaces, mountains, and modern city life all in one place.",
    },
    { src: gallery2, alt: "" },
    { src: gallery3, alt: "" },
    { src: gallery4, alt: "" },
  ],
};
