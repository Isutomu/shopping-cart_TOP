import NavBar from "../containers/NavBar/NavBar";
import CategoriesHome from "../containers/CategoriesHome/CategoriesHome";
import Footer from "../containers/Footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
