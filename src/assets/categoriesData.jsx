import { v4 as uuidv4 } from "uuid";
import consoleImg from "./banner-console.jpg";
import gamesImg from "./banner-games.jpg";
import peripheralsImg from "./banner-peripherals.jpg";

const categories = [
  { id: uuidv4(), name: "clothes", imgUrl: consoleImg, categoryId: "1" },
  { id: uuidv4(), name: "electronics", imgUrl: gamesImg, categoryId: "4" },
  {
    id: uuidv4(),
    name: "miscellaneous",
    imgUrl: peripheralsImg,
    categoryId: "5",
  },
];

export default categories;
