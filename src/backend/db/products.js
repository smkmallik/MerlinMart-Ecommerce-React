import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Macbook Pro",
    author: "Apple",
    price: "5000",
    category: "laptop",
    rating: 4,
    inStock: true,
    discount: 30,
    fastDelivery: true
  },
  {
    _id: uuid(),
    title: "iPhone 13",
    author: "Apple",
    price: "3000",
    category: "mobile",
    rating: 3,
    inStock: true,
    discount: 40,
    fastDelivery: true
  },
  {
    _id: uuid(),
    title: "iPad 2020",
    author: "Apple",
    price: "1000",
    category: "tablet",
    rating: 2,
    inStock: true,
    discount: 50,
    fastDelivery: true
  },
  {
    _id: uuid(),
    title: "iPad 2020",
    author: "Apple",
    price: "1000",
    category: "tablet",
    rating: 4,
    inStock: false,
    discount: 20,
    fastDelivery: true
  },
  {
    _id: uuid(),
    title: "iPad 2020",
    author: "Apple",
    price: "1000",
    category: "tablet",
    rating: 1,
    inStock: false,
    discount: 10,
    fastDelivery: true
  },
  {
    _id: uuid(),
    title: "iPad 2020",
    author: "Apple",
    price: "1000",
    category: "tablet",
    rating: 5,
    inStock: false,
    discount: 60,
    fastDelivery: true
  },
];
