import heroImage from "../../images/city/qazvin/hero.jpg";
import descriptionImage from "../../images/city/qazvin/description.jpg";
import gallery1 from "../../images/city/qazvin/gallery-1.jpg";
import gallery2 from "../../images/city/qazvin/gallery-2.jpg";
import gallery3 from "../../images/city/qazvin/gallery-3.jpg";
import gallery4 from "../../images/city/qazvin/gallery-4.jpg";

// TODO: replace featured placeholders with actual images
export const qazvin = {
  slug: "qazvin",
  title: "Qazvin",
  heroImage,
  descriptionTitle: "Qazvin",
  descriptionText:
    "Qazvin once served as a capital of the Persian Empire and remains rich in historical significance. It's known for its stunning Safavid-era architecture, such as the Chehel Sotoun Pavilion and ancient mosques. Positioned between Tehran and the Caspian region, Qazvin is both a strategic crossroad and a cultural stronghold.",
  descriptionImage,
  featured: [
    { title: "", description: "", img: gallery1, alt: "" },
    { title: "", description: "", img: gallery2, alt: "" },
    { title: "", description: "", img: gallery3, alt: "" },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Historic architecture of Qazvin",
      text: "Qazvin is known for its historic palaces, calligraphy, and rich cultural heritage.",
    },
    { src: gallery2, alt: "Safavid-era buildings in Qazvin" },
    { src: gallery3, alt: "Traditional streets of Qazvin" },
    { src: gallery4, alt: "Historic mosque in Qazvin" },
  ],
};
