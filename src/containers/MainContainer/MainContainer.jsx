import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CategoriesHome from "../CategoriesHome/CategoriesHome";
import StoreOfCategory from "../StoreOfCategory/StoreOfCategory";
import ProductPage from "../../components/ProductPage/ProductPage";
import categories from "../../assets/categoriesData";

function getPage({ type, id, possibleCategories }) {
  switch (type) {
    case "home":
      return <CategoriesHome categories={categories} />;
    case "category":
      return possibleCategories.includes(id) ? (
        <StoreOfCategory categoryId={id} />
      ) : (
        <span>Error</span>
      );
    case "product":
      return <ProductPage productId={id} />;
  }
}

const MainContainer = ({ type = "home" }) => {
  const { id } = useParams();
  const possibleCategories = categories.map((category) => category.categoryId);

  return <main>{getPage({ type, id, possibleCategories })}</main>;
};

MainContainer.propTypes = {
  type: PropTypes.string,
};

export default MainContainer;
