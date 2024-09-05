import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";
import styles from "./CategoriesHome.module.css";

const CategoriesHome = ({ categories }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((category) => (
        <Banner key={category.id} data={category} />
      ))}
    </ul>
  );
};

CategoriesHome.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
    })
  ),
};

export default CategoriesHome;
