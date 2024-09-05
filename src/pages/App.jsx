import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../containers/NavBar/NavBar";
import Footer from "../containers/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const [cartProducts, setCartProducts] = useState({});
  const handleSearch = (value) => alert("it worked!" + value);
  const toggleVisibilityShoppingCart = () => alert("cart toggled!");

  const addToCart = (productData) => {
    const isProductAlreadyOnCart = productData.id in cartProducts;

    const newCart = { ...cartProducts };
    if (isProductAlreadyOnCart) {
      newCart[productData.id].quantity += productData.quantity;
    } else {
      newCart[productData.id] = productData;
    }
    console.log(newCart);
    setCartProducts(newCart);
  };

  return (
    <div className={styles.container}>
      <NavBar
        handleSearch={handleSearch}
        toggleVisibilityShoppingCart={toggleVisibilityShoppingCart}
      />
      <Outlet context={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
