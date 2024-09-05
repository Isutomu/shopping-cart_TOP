import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./StoreOfCategory.module.css";

const useProductData = (categoryId) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Fake Store API: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, [categoryId]);
  return { products, error, loading };
};

const StoreOfCategory = ({ categoryId }) => {
  const { products, error, loading } = useProductData(categoryId);

  if (!products || loading) return <span>Loading</span>;
  if (error) return <span>{error.message}</span>;

  return (
    <section className={styles.productsSection}>
      {products.map((productData) => (
        <ProductItem key={productData.id} data={productData} />
      ))}
    </section>
  );
};

StoreOfCategory.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default StoreOfCategory;
