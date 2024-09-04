import { Outlet } from "react-router-dom";
import NavBar from "../containers/NavBar/NavBar";
import Footer from "../containers/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const handleSearch = (value) => alert("it worked!" + value);
  const toggleVisibilityShoppingCart = () => alert("cart toggled!");

  return (
    <div className={styles.container}>
      <NavBar
        handleSearch={handleSearch}
        toggleVisibilityShoppingCart={toggleVisibilityShoppingCart}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
