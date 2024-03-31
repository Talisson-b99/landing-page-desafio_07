/* eslint-disable react/prop-types */
import "./styles.scss";

import iconPlus from "../../assets/icon-plus.svg";
import Stars from "../Stars";

const ProductCards = ({ product }) => (
  <div className="productCard">
    <div className="productCard__img--container">
      <img src={product.img} className="productCard__img" alt={product.title} />
      <img src={product.shadow} alt="" className="productCard__shadow" />
    </div>
    <div className="productCard__content">
      <h5 className="productCard__category">{product.category}</h5>
      <h3 className="title">{product.title}</h3>
      <Stars count={product.rating} />
      <div className="productCard__content--priceBox">
        <p className="price">
          <span>$</span> {product.price}
        </p>
        <button className="buy__btn">
          <img src={iconPlus} alt="" />
        </button>
      </div>
    </div>
  </div>
);
export default ProductCards;
