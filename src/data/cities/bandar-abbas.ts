import heroImage from "../../images/city/bandar-abbas/hero.jpg";
import descriptionImage from "../../images/city/bandar-abbas/description.jpg";
import gallery1 from "../../images/city/bandar-abbas/gallery-1.jpg";
import gallery2 from "../../images/city/bandar-abbas/gallery-2.jpg";
import gallery3 from "../../images/city/bandar-abbas/gallery-3.jpg";
import gallery4 from "../../images/city/bandar-abbas/gallery-4.png";

export const bandarAbbas = {
  slug: "bandar-abbas",
  title: "Bandar Abbas",
  heroImage,
  descriptionTitle: "Bandar Abbas",
  descriptionText:
    "Bandar Abbas is Iran’s main southern port city on the Persian Gulf, vital for trade and maritime commerce. It has a tropical climate, a mix of cultures, and strong influences from the Arab and South Asian world. The city serves as the main jumping-off point to the Persian Gulf islands and plays a key role in the country’s naval and economic activity.",
  descriptionImage,
  featured: [
    { title: "", description: "", img: gallery1, alt: "" },
    { title: "", description: "", img: gallery2, alt: "" },
    { title: "", description: "", img: gallery3, alt: "" },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Coastal life in Bandar Abbas",
      text: "Bandar Abbas feels vibrant and coastal, offering a real glimpse into life along Iran’s southern shores.",
    },
    { src: gallery2, alt: "Port and harbor of Bandar Abbas" },
    { src: gallery3, alt: "Persian Gulf coastline near Bandar Abbas" },
    { src: gallery4, alt: "Traditional markets in Bandar Abbas" },
  ],
};
