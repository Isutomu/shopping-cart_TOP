import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ data }) => {
  return (
    <Link to={`category/${data.name}`} className={styles.banner}>
      <img className={styles.img} src={data.imgUrl} />
      <span className={styles.categoryName}>{data.name.toUpperCase()}</span>
    </Link>
  );
};

Banner.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }),
};

export default Banner;
