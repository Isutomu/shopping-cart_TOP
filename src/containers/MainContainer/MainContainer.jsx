import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CategoriesHome from "../CategoriesHome/CategoriesHome";
import categories from "../../assets/categoriesData";

const MainContainer = ({ isHome = false }) => {
  const { storeCategory } = useParams();
  const possibleCategories = categories.map((category) => category.name);

  return (
    <main>
      {isHome ? (
        <CategoriesHome categories={categories} />
      ) : possibleCategories.includes(storeCategory) ? (
        <span>{storeCategory}</span>
      ) : (
        <span>Error</span>
      )}
    </main>
  );
};

MainContainer.propTypes = {
  isHome: PropTypes.bool,
};

export default MainContainer;
