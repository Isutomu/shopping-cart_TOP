import Icon from "@mdi/react";
import { mdiCloseBox } from "@mdi/js";
import PropTypes from "prop-types";
import ProductCart from "../ProductCart/ProductCart";
import styles from "./Cart.module.css";

const Cart = ({
  products,
  toggleVisibility,
  deleteProduct,
  changeQuantity,
}) => {
  const productIds = Object.keys(products);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.title}>Cart</span>
        <button className={styles.closeCart} onClick={toggleVisibility}>
          <Icon path={mdiCloseBox} size={1.5} />
        </button>
      </div>
      <ul className={styles.productsList}>
        {productIds.length ? (
          productIds.map((productId) => (
            <ProductCart
              key={productId}
              product={products[productId]}
              deleteProduct={deleteProduct}
              changeQuantity={changeQuantity}
            />
          ))
        ) : (
          <span>No products here...YET</span>
        )}
      </ul>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.object.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export default Cart;
