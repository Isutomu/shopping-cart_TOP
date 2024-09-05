import PropTypes from "prop-types";
import useStoreData from "../../customHooks/useStoreData";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./StoreOfCategory.module.css";

const StoreOfCategory = ({ categoryId }) => {
  const apiUrl = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  const { data, error, loading } = useStoreData(apiUrl);

  if (!data || loading) return <span>Loading</span>;
  if (error) return <span>{error.message}</span>;

  return (
    <section className={styles.productsSection}>
      {data.map((productData) => (
        <ProductItem key={productData.id} data={productData} />
      ))}
    </section>
  );
};

StoreOfCategory.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default StoreOfCategory;
