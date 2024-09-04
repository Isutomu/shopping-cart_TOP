import { v4 as uuidv4 } from "uuid";
import consoleImg from "./banner-console.jpg";
import gamesImg from "./banner-games.jpg";
import peripheralsImg from "./banner-peripherals.jpg";

const categories = [
  { id: uuidv4(), name: "electronics", imgUrl: consoleImg },
  { id: uuidv4(), name: "jewelery", imgUrl: gamesImg },
  { id: uuidv4(), name: "men's clothing", imgUrl: peripheralsImg },
];

export default categories;
