import PropTypes from "prop-types";
import { useState } from "react";

const ProductPage = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  const handleChange = (e) => {
    setProductQuantity(e.target.value);
  };

  return (
    <div>
      <img />
      <span></span>
      <span></span>
      <span></span>
      <input type="number" value={productQuantity} onChange={handleChange} />
      <button></button>
    </div>
  );
};

export default ProductPage;
