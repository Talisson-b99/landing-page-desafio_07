/* eslint-disable react/prop-types */
import ProductCards from "../ProductCard";
import "./styles.scss";

const Shelf = ({ products }) => {
  return (
    <div className="shelf">
      {products.map((product) => (
        <ProductCards key={product.title} product={product} />
      ))}
    </div>
  );
};

export default Shelf;
