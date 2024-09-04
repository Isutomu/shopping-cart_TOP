import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import styles from "./CategoriesHome.module.css";
import categories from "../../assets/categoriesData";

const CategoriesHome = ({ className }) => {
  const { storeCategory } = useParams();
  const possibleCategories = categories.map((category) => category.name);

  return (
    <main className={className}>
      {storeCategory === undefined ? (
        <ul className={styles.categories}>
          {categories.map((category) => (
            <Banner key={category.id} data={category} />
          ))}
        </ul>
      ) : possibleCategories.includes(storeCategory) ? (
        <span>{storeCategory}</span>
      ) : (
        <span>Error</span>
      )}
    </main>
  );
};

CategoriesHome.propTypes = {
  className: PropTypes.string,
};

export default CategoriesHome;
