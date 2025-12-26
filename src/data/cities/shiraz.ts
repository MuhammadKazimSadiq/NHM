import heroImage from "../../images/city/shiraz/hero.jpg";
import descriptionImage from "../../images/city/shiraz/description.jpg";
import featured1 from "../../images/city/shiraz/featured-1.png";
import featured2 from "../../images/city/shiraz/featured-2.jpg";
import featured3 from "../../images/city/shiraz/featured-3.png";
import gallery1 from "../../images/city/shiraz/gallery-1.jpg";
import gallery2 from "../../images/city/shiraz/gallery-2.jpg";
import gallery3 from "../../images/city/shiraz/gallery-3.jpg";
import gallery4 from "../../images/city/shiraz/gallery-4.jpg";

export const shiraz = {
  slug: "shiraz",
  title: "Shiraz",
  heroImage,
  descriptionTitle: "Shiraz",
  descriptionText:
    "Shiraz is the city of poets, gardens, and wine—renowned as the cultural heart of Iran. Home to the tombs of Hafez and Sa’di, it blends literary legacy with stunning sites like the Nasir al-Mulk “Pink” Mosque and the vast Eram Garden. Close to the ancient ruins of Persepolis, Shiraz is a gateway to Iran’s imperial past and a center of Persian identity.",
  descriptionImage,
  featured: [
    {
      title: "Eram Garden",
      description: "A striking square with illuminated arches and shops.",
      img: featured1,
      alt: "Eram Garden",
    },
    {
      title: "Persepolis",
      description:
        "Walk through the ruins of the Achaemenid Empire’s ceremonial capital, a UNESCO World Heritage site.",
      img: featured2,
      alt: "Persepolis",
    },
    {
      title: "Shrine of Shah Cheragh",
      description:
        "The shrine of Shah Cheragh (Ahmad ibn Musa) is peaceful and a stunning place to see.",
      img: featured3,
      alt: "Shrine of Shah Cheragh",
    },
  ],
  gallery: [
    {
      src: gallery1,
      alt: "Shiraz gardens and historic sites",
      text: "Known for its gardens, poets, and sacred sites, Shiraz is ideal for travelers looking for culture, spirituality, and beauty in one city.",
    },
    { src: gallery2, alt: "Nasir al-Mulk Mosque in Shiraz" },
    { src: gallery3, alt: "Persepolis ruins near Shiraz" },
    { src: gallery4, alt: "Shrine of Shah Cheragh interior" },
  ],
};
