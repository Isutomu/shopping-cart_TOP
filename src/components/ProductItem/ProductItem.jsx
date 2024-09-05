import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ data }) => {
  const imgUrl = data.images[0].replace('["', "").replace('"]', "");
  return (
    <Link to={`../product/${data.id}`} className={styles.productItem}>
      <img className={styles.productPhoto} src={imgUrl} />
      <span className={styles.description}>{data.title}</span>
      <span className={styles.price}>$ {data.price.toFixed(2)}</span>
    </Link>
  );
};

ProductItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductItem;
