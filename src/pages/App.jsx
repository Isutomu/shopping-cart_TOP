import NavBar from "../containers/NavBar/NavBar";
import CategoriesHome from "../containers/CategoriesHome/CategoriesHome";
import Footer from "../containers/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const handleSearch = (value) => alert("it worked!" + value);
  const toggleVisibilityShoppingCart = () => alert("cart toggled!");

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        toggleVisibilityShoppingCart={toggleVisibilityShoppingCart}
      />
      <CategoriesHome />
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
