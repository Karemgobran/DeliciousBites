import React from "react";
import "./ProductCard.scss";
function ProductCard({ product }) {
  return (
    <div className="product-card shadow-md">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info p-4">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="prise_btn d-flex justify-content-between align-items-center">
          <span className="price">
            {product.price}-{product.currency}
          </span>
          <button className="btn view-details">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
