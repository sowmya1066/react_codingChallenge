import Product1 from "./assets/product1.png";
import Product2 from "./assets/product2.png";
import Product3 from "./assets/product3.png";
import Product4 from "./assets/product4.png";

const products = [
  {
    id: 1,
    category: "Men’s clothing",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "Your perfect pack for everyday us...",
    fullDescription:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: "$109.95",
    rating: { stars: 3.9, reviews: 120 },
    image: Product1,
  },
  {
    id: 2,
    category: "Men’s clothing",
    name: "Casual Premium Slim Fit T-Shirts, for comfortable  ",
    description: "Slim-fitting style, contrast raglan long..",
    fullDescription:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    price: "$22.3",
    rating: { stars: 4.1, reviews: 259 },
    image: Product2,
  },
  {
    id: 3,
    category: "Men’s clothing",
    name: "Mens Cotton Jacket",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable...",
    fullDescription:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    price: "$55.99",
    rating: { stars: 4.7, reviews: 500 },
    image: Product3,
  },
  {
    id: 4,
    category: "Jewellery",
    name: "John Hardy Women's Legends Naga Gold & Silver..",
    description: "From our Legends Collection, the...",
    fullDescription:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    price: "$109.95",
    rating: { stars: 4.6, reviews: 400 },
    image: Product4,
  },
];

export default products;
