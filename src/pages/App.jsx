import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../containers/NavBar/NavBar";
import Footer from "../containers/Footer/Footer";
import Cart from "../components/Cart/Cart";
import styles from "./App.module.css";

function App() {
  const [cartProducts, setCartProducts] = useState({});
  const [toggleCart, setToggleCart] = useState(false);
  const handleSearch = (value) => alert("it worked!" + value);

  const toggleVisibilityShoppingCart = () =>
    setToggleCart((previous) => !previous);
  const addToCart = (productData) => {
    const isProductAlreadyOnCart = productData.id in cartProducts;

    const newCart = { ...cartProducts };
    if (isProductAlreadyOnCart) {
      newCart[productData.id].quantity += productData.quantity;
    } else {
      newCart[productData.id] = productData;
    }
    setCartProducts(newCart);
  };
  const deleteProductFromCart = (productId) => {
    const productsAsArr = Object.entries(cartProducts);
    const filtered = productsAsArr.filter(
      ([key, value]) => Number(key) !== productId
    );
    const newCart = Object.fromEntries(filtered);

    setCartProducts(newCart);
  };

  return (
    <>
      <div className={styles.container}>
        <NavBar
          handleSearch={handleSearch}
          toggleVisibilityShoppingCart={toggleVisibilityShoppingCart}
        />
        <Outlet context={addToCart} />
        <Footer />
      </div>
      <div
        className={`${styles.cart} ${
          toggleCart ? styles.showCart : styles.hideCart
        }`}
      >
        <Cart
          products={cartProducts}
          toggleVisibility={toggleVisibilityShoppingCart}
          changeQuantity={addToCart}
          deleteProduct={deleteProductFromCart}
        />
      </div>
    </>
  );
}

export default App;
