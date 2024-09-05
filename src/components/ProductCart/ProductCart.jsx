import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import PropTypes from "prop-types";
import styles from "./ProductCart.module.css";

const ProductCart = ({ product, deleteProduct, changeQuantity }) => {
  const handleChangeQuantity = (e) => {
    changeQuantity({ ...product, quantity: Number(e.target.value) });
  };

  return (
    <li className={styles.product}>
      <div className={styles.productDescription}>
        <input
          className={styles.quantity}
          value={product.quantity}
          onChange={handleChangeQuantity}
        />
        <span className={styles.title}>{product.title}</span>
        <span className={styles.price}>
          <nobr>$ {product.price.toFixed(2)}</nobr>
        </span>
      </div>
      <button
        className={styles.deleteProduct}
        onClick={() => {
          deleteProduct(product.id);
        }}
      >
        <Icon path={mdiTrashCan} size={1} />
      </button>
    </li>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
  deleteProduct: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export default ProductCart;
