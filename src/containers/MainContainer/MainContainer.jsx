import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CategoriesHome from "../CategoriesHome/CategoriesHome";
import StoreOfCategory from "../StoreOfCategory/StoreOfCategory";
import categories from "../../assets/categoriesData";

const MainContainer = ({ isHome = false }) => {
  const { categoryId } = useParams();
  const possibleCategories = categories.map((category) => category.categoryId);

  return (
    <main>
      {isHome ? (
        <CategoriesHome categories={categories} />
      ) : possibleCategories.includes(categoryId) ? (
        <StoreOfCategory categoryId={categoryId} />
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
