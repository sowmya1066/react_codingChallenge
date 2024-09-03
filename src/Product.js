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
    price: "$109.95",
    rating: { stars: 3.9, reviews: 120 },
    image: Product1,
  },
  {
    id: 2,
    category: "Men’s clothing",
    name: "Casual Premium Slim Fit T-Shirts, for comfortable  ",
    description: "Slim-fitting style, contrast raglan long..",
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
    price: "$55.99",
    rating: { stars: 4.7, reviews: 500 },
    image: Product3,
  },
  {
    id: 4,
    category: "Jewellery",
    name: "John Hardy Women's Legends Naga Gold & Silver..",
    description: "From our Legends Collection, the...",
    price: "$109.95",
    rating: { stars: 4.6, reviews: 400 },
    image: Product4,
  },
];

export default products;
