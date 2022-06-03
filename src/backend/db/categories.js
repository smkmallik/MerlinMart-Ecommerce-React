import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mobiles",
   },
  {
    _id: uuid(),
    categoryName: "Laptops",
   },
  {
    _id: uuid(),
    categoryName: "Tablets",
  },
  {
    _id: uuid(),
    categoryName: 'Desktops'
  }
];
