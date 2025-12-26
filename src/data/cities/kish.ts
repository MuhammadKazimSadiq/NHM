import heroImage from "../../images/city/kish/hero.jpg";
import descriptionImage from "../../images/city/kish/description.jpg";
import featured1 from "../../images/city/kish/featured-1.png";
import featured2 from "../../images/city/kish/featured-2.jpg";
import featured3 from "../../images/city/kish/featured-3.jpg";
import featured4 from "../../images/city/kish/featured-4.png";
import featured5 from "../../images/city/kish/featured-5.png";
import featured6 from "../../images/city/kish/featured-6.jpg";
import gallery1 from "../../images/city/kish/gallery-1.png";
import gallery2 from "../../images/city/kish/gallery-2.jpg";
import gallery3 from "../../images/city/kish/gallery-3.png";
import gallery4 from "../../images/city/kish/gallery-4.jpg";

export const kish = {
  slug: "kish",
  title: "Kish Island",
  heroImage,
  descriptionTitle: "Kish Island",
  descriptionText:
    "Kish is a luxury resort island with modern shopping centers, beachfront resorts, and a more relaxed set of social rules compared to mainland Iran. As a free trade zone, it draws tourists and investors, while offering coral beaches, water sports, and a polished travel experience. Kish blends leisure with commerce in a polished, controlled environment.",
  descriptionImage,
  featured: [
    {
      title: "Kariz-e-Kish Underground City",
      description:
        "Vast complex of ancient underground aqueducts dating back some 2,500 years.",
      img: featured1,
      alt: "Kariz-e-Kish Underground City",
    },
    {
      title: "The Greek Ship",
      description:
        "View the remains of a Greek Merchant ship dating back to the 4th Century BCE",
      img: featured2,
      alt: "The Greek Ship",
    },
    {
      title: "Kish Dolphin Park",
      description:
        "An aquarium & zoo with birds, reptiles & marine life, offering live dolphin shows & circus acts.",
      img: featured3,
      alt: "Kish Dolphin Park",
    },
    {
      title: "Marjan Beach",
      description: "This beautiful beach has white sand and clear water",
      img: featured4,
      alt: "Marjan Beach",
    },
    {
      title: "Ocean Water Park",
      description:
        "This pirate-themed water park has slides & swimming pools, eateries & a souvenir shop.",
      img: featured5,
      alt: "Ocean Water Park",
    },
    {
      title: "Kish Yacht Rides",
      description:
        "Get on a Yacht for gorgeous views of the shoreline and city.",
      img: featured6,
      alt: "Kish Yacht Rides",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Beaches and clear waters of Kish",
      text: "Kish, known for its clear waters, beaches, and relaxed atmosphere, this place makes you forget where you are!",
    },
    { src: gallery2, alt: "Greek Ship at sunset in Kish" },
    { src: gallery3, alt: "Water sports and resorts in Kish" },
    { src: gallery4, alt: "Marjan Beach in Kish" },
  ],
};
