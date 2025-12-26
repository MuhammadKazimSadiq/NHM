import heroImage from "../../images/city/ramsar/hero.png";
import descriptionImage from "../../images/city/ramsar/description.jpg";
import featured1 from "../../images/city/ramsar/featured-1.png";
import featured2 from "../../images/city/ramsar/featured-2.png";
import featured3 from "../../images/city/ramsar/featured-3.png";
import featured4 from "../../images/city/ramsar/featured-4.jpg";
import featured5 from "../../images/city/ramsar/featured-5.jpg";
import featured6 from "../../images/city/ramsar/featured-6.png";
import gallery1 from "../../images/city/ramsar/gallery-1.jpg";
import gallery2 from "../../images/city/ramsar/gallery-2.jpg";
import gallery3 from "../../images/city/ramsar/gallery-3.jpg";
import gallery4 from "../../images/city/ramsar/gallery-4.jpg";

export const ramsar = {
  slug: "ramsar",
  title: "Ramsar",
  heroImage,
  descriptionTitle: "Ramsar",
  descriptionText:
    "Ramsar is a picturesque city nestled between the Caspian Sea and the Alborz Mountains, known for its stunning natural landscapes, hot springs, and mild climate. It was once a favorite vacation spot for royalty and remains a popular getaway for those seeking peace, greenery, and ocean views. With a unique blend of coastal beauty, mountain air, and cultural charm, Ramsar offers a refreshing retreat from urban life.",
  descriptionImage,
  featured: [
    {
      title: "Boat Ride on the Caspian Sea",
      description:
        "Enjoy a serene boat trip with views of lush forests meeting the sea. This may be the highlight of your entire trip!",
      img: featured1,
      alt: "Boat Ride on the Caspian Sea",
    },
    {
      title: "Cable Car Trip",
      description:
        "Ride on a cable car for gorgeous views of Ramsar and the Caspian Sea",
      img: featured2,
      alt: "Ramsar Cable Car",
    },
    {
      title: "Ramsar Suspension Bridge",
      description:
        "Breathe fresh Caspian air amidst breathtaking natural beauty",
      img: featured3,
      alt: "Ramsar Suspension Bridge",
    },
    {
      title: "Aab e-Garm (Sulfur Bath)",
      description: "",
      img: featured4,
      alt: "Aab e-Garm Sulfur Bath",
    },
    {
      title: "Turkish Hammam",
      description: "",
      img: featured5,
      alt: "Turkish Hammam",
    },
    {
      title: "Casino Boulevard",
      description: "",
      img: featured6,
      alt: "Casino Boulevard",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Ramsar nature and coastline",
      text: "Set between the Caspian Sea and the Alborz Mountains, enjoy the lush forests, hot springs, and mild climate.",
    },
    { src: gallery2, alt: "Caspian Sea coastline in Ramsar" },
    { src: gallery3, alt: "Alborz Mountains near Ramsar" },
    { src: gallery4, alt: "Green forests of Ramsar" },
  ],
};
