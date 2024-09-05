import PropTypes from "prop-types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import useStoreData from "../../customHooks/useStoreData";
import styles from "./ProductPage.module.css";

const ProductPage = ({ productId }) => {
  const apiUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const [productQuantity, setProductQuantity] = useState(1);
  const addToCart = useOutletContext();
  const { data, error, loading } = useStoreData(apiUrl);
  const imageUrl = data?.images[0].replace('["', "").replace('"]', "");

  const handleChange = (e) => {
    const currentValue = e.target.value;

    currentValue < 1
      ? setProductQuantity(1)
      : setProductQuantity(e.target.value);
  };

  if (!data || loading) return <span>Loading</span>;
  if (error) return <span>{error.message}</span>;

  return (
    <section className={styles.pageContainer}>
      <div className={styles.productContainer}>
        <img className={styles.image} src={imageUrl} />
        <span className={styles.title}>{data.title}</span>
        <span className={styles.description}>{data.description}</span>
        <span className={styles.price}>$ {data.price.toFixed(2)}</span>

        <label className={styles.input}>
          Quantity:
          <input
            className={styles.inputField}
            type="number"
            min="1"
            value={productQuantity}
            onChange={handleChange}
          />
        </label>
        <button
          className={styles.button}
          onClick={() =>
            addToCart({ ...data, quantity: Number(productQuantity) })
          }
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

ProductPage.propTypes = {
  productId: PropTypes.string,
};

export default ProductPage;
