import heroImage from "../../images/city/mashhad/hero.jpeg";
import descriptionImage from "../../images/city/mashhad/description.jpg";
import featured1 from "../../images/city/mashhad/featured-1.png";
import featured2 from "../../images/city/mashhad/featured-2.png";
import featured3 from "../../images/city/mashhad/featured-3.png";
import gallery1 from "../../images/city/mashhad/gallery-1.png";
import gallery2 from "../../images/city/mashhad/gallery-2.png";
import gallery3 from "../../images/city/mashhad/gallery-3.jpg";
import gallery4 from "../../images/city/mashhad/gallery-4.jpeg";

export const mashhad = {
  slug: "mashhad",
  title: "Mashhad",
  heroImage,
  descriptionTitle: "Mashhad",
  descriptionText:
    "Mashhad is Iran’s spiritual heart, famous for housing the holy shrine of Imam Ali al-Ridha (as), the 8th Shi’a Imam. Every year, millions of pilgrims and tourists visit to experience its profound atmosphere, intricate tilework, and rich religious history. Beyond the shrine, Mashhad offers vibrant bazaars, traditional Persian baths, and nearby natural attractions like Torqabeh. Whether you're seeking spiritual connection or cultural immersion, Mashhad delivers an unforgettable journey.",
  descriptionImage,
  featured: [
    {
      title: "Koohsangi Park",
      description:
        "This park is one of the most picturesque parks, and the second largest recreational complex.",
      img: featured1,
      alt: "Koohsangi Park",
    },
    {
      title: "Mellat Amusement Park",
      description: "Historic pavilion with gardens and vibrant wall paintings.",
      img: featured2,
      alt: "Mellat Amusement Park",
    },
    {
      title: "Arman Shopping",
      description:
        "Iconic bridges like Si‑o‑se-pol, beautifully lit for evening walks.",
      img: featured3,
      alt: "Arman Shopping",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Mashhad",
      text: "A place of devotion and peace, drawing millions of lovers to visit.",
    },
    { src: gallery2, alt: "" },
    { src: gallery3, alt: "" },
    { src: gallery4, alt: "" },
  ],
};
