import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";
import styles from "./CategoriesHome.module.css";

const CategoriesHome = ({ className, categories }) => {
  return (
    <main className={className}>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <Banner key={category.id} data={category} />
        ))}
      </ul>
    </main>
  );
};

CategoriesHome.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default CategoriesHome;
