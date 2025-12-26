import heroImage from "../../images/city/hamedan/hero.jpg";
import descriptionImage from "../../images/city/hamedan/description.png";
import featured1 from "../../images/city/hamedan/featured-1.png";
import featured2 from "../../images/city/hamedan/featured-2.png";
import featured3 from "../../images/city/hamedan/featured-3.png";
import gallery1 from "../../images/city/hamedan/gallery-1.jpg";
import gallery2 from "../../images/city/hamedan/gallery-2.png";
import gallery3 from "../../images/city/hamedan/gallery-3.png";
import gallery4 from "../../images/city/hamedan/gallery-4.png";

export const hamedan = {
  slug: "hamedan",
  title: "Hamedan",
  heroImage,
  descriptionTitle: "Hamedan",
  descriptionText:
    "Hamedan is one of the oldest cities in Iran—and the world—rooted in the ancient Median Empire. Known historically as Ecbatana, it holds archaeological and spiritual weight with landmarks like the Tomb of Avicenna and the Ganjnameh inscriptions. Surrounded by mountains, Hamedan offers a mix of history, myth, and natural beauty.",
  descriptionImage,
  featured: [
    {
      title: "Ganjnameh Inscriptions",
      description: "Ancient Achaemenid carvings beside a scenic waterfall.",
      img: featured1,
      alt: "Ganjnameh Inscriptions",
    },
    {
      title: "Ali Sadr Cave",
      description: "An underground boat ride through vast limestone chambers.",
      img: featured2,
      alt: "Ali Sadr Cave",
    },
    {
      title: "Imamzadeh Abdollah Mosque",
      description:
        "Here are buried is the great grandchild of Imam Kadhim (as)",
      img: featured3,
      alt: "Imamzadeh Abdollah Mosque",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Historic landmarks of Hamedan",
      text: "Hamedan is known for ancient sites like the Tomb of Avicenna and nearby Alisadr Cave, ideal for travelers interested in early Persian history and archaeology.",
    },
    { src: gallery2, alt: "Ganjnameh inscriptions and waterfall" },
    { src: gallery3, alt: "Ali Sadr Cave interior" },
    { src: gallery4, alt: "Tomb of Avicenna in Hamedan" },
  ],
};
