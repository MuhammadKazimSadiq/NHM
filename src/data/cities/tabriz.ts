import heroImage from "../../images/city/tabriz/hero.jpg";
import descriptionImage from "../../images/city/tabriz/description.jpg";
import featured1 from "../../images/city/tabriz/featured-1.png";
import featured2 from "../../images/city/tabriz/featured-2.jpg";
import featured3 from "../../images/city/tabriz/featured-3.jpg";
import gallery1 from "../../images/city/tabriz/gallery-1.jpg";
import gallery2 from "../../images/city/tabriz/gallery-2.jpg";
import gallery3 from "../../images/city/tabriz/gallery-3.jpg";
import gallery4 from "../../images/city/tabriz/gallery-4.jpg";

export const tabriz = {
  slug: "tabriz",
  title: "Tabriz",
  heroImage,
  descriptionTitle: "Tabriz",
  descriptionText:
    "Tabriz is a historic city in northwestern Iran known for its rich Azeri culture, ancient bazaars, and role as a trading hub on the Silk Road. The Tabriz Historic Bazaar Complex is one of the largest and oldest covered bazaars in the world. With its blend of commerce, art, and political history, Tabriz has long been a vital cultural and economic center.",
  descriptionImage,
  featured: [
    {
      title: "Tabriz Bazaar",
      description: "An UNESCO-listed market full of carpets and crafts",
      img: featured1,
      alt: "Tabriz Bazaar",
    },
    {
      title: "El Goli Park",
      description: "Lake with pedal boats and landscaped gardens",
      img: featured2,
      alt: "El Goli Park",
    },
    {
      title: "Blue Mosque",
      description: "Historic mosque with striking turquoise tilework",
      img: featured3,
      alt: "Blue Mosque",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Historic bazaar and culture of Tabriz",
      text: "Tabriz boasts its historic bazaar, rich Azeri culture, and role on the Silk Road. Its rich heritage, bold flavors, and architecture tell stories older than empires.",
    },
    { src: gallery2, alt: "El Goli Park in Tabriz" },
    { src: gallery3, alt: "Blue Mosque tilework in Tabriz" },
    { src: gallery4, alt: "Traditional streets of Tabriz" },
  ],
};
