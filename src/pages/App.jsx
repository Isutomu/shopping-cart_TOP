import NavBar from "../containers/NavBar/NavBar";
import CategoriesHome from "../containers/CategoriesHome/CategoriesHome";
import Footer from "../containers/Footer/Footer";
import styles from "./App.module.css";
import categories from "../assets/categoriesData";

function App() {
  const handleSearch = (value) => alert("it worked!" + value);
  const toggleVisibilityShoppingCart = () => alert("cart toggled!");

  return (
    <div className={styles.container}>
      <NavBar
        handleSearch={handleSearch}
        toggleVisibilityShoppingCart={toggleVisibilityShoppingCart}
      />
      <CategoriesHome className={styles.categories} categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
