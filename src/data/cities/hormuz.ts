import heroImage from "../../images/city/hormuz/hero.jpg";
import descriptionImage from "../../images/city/hormuz/description.jpg";
import featured1 from "../../images/city/hormuz/featured-1.png";
import featured2 from "../../images/city/hormuz/featured-2.jpg";
import featured3 from "../../images/city/hormuz/featured-3.jpg";
import gallery1 from "../../images/city/hormuz/gallery-1.jpg";
import gallery2 from "../../images/city/hormuz/gallery-2.jpg";
import gallery3 from "../../images/city/hormuz/gallery-3.jpg";
import gallery4 from "../../images/city/hormuz/gallery-4.jpg";

export const hormuz = {
  slug: "hormuz",
  title: "Hormuz Island",
  heroImage,
  descriptionTitle: "Hormuz Island",
  descriptionText:
    "Hormuz Island lies in the Persian Gulf, just off the southern coast of Iran near Bandar Abbas. Known as the “Rainbow Island”, it is famous for its vividly colored landscapes, especially the striking red soil. The island is rich in natural beauty, with over 70 types of minerals, surreal valleys, and pristine beaches. Beyond its geology, Hormuz is also known for its cultural heritage, traditional crafts, and warm hospitality, making it a unique destination for travelers.",
  descriptionImage,
  featured: [
    {
      title: "Salt Goddess Cave & Mountain",
      description:
        "This turquoise salt cave is one of the most important attractions of the region.",
      img: featured1,
      alt: "Salt Goddess Cave and Mountain",
    },
    {
      title: "Rainbow Valley",
      description: "Historic pavilion with gardens and vibrant wall paintings.",
      img: featured2,
      alt: "Rainbow Valley Hormuz",
    },
    {
      title: "Silver Beach",
      description:
        "This unique natural wonder is known for its silvery grey sand created from volcanic minerals",
      img: featured3,
      alt: "Silver Beach Hormuz",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Colorful landscapes of Hormuz Island",
      text: "Experience Hormuz Island, famous for its colourful landscapes, dramatic coastlines, and unique geological formations.",
    },
    { src: gallery2, alt: "Red soil beaches of Hormuz" },
    { src: gallery3, alt: "Rainbow Valley formations" },
    { src: gallery4, alt: "Salt Goddess Cave interior" },
  ],
};
