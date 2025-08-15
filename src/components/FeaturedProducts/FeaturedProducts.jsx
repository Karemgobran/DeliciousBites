import React from "react";
import "./FeaturedProducts.scss";
import ProductCard from "../product-card/ProductCard";
import products from "../../data/featuredproducts.json";
import { useState } from "react";
function FeaturedProducts() {
  const [visibleCount, setVisibleCount] = useState(6);

  function loadMore() {
    setVisibleCount(visibleCount + 3);
  }
  function loadLess() {
    setVisibleCount(visibleCount - 3);
  }
  return (
    <div className="featured-products">
      <div className="container">
        <h2 className="text-center">
          <span>Featured</span> Products
        </h2>
        <div className="row">
          {products.slice(0, visibleCount).map((product, index) => (
            <div className="col-md-4 mt-4" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="text-center mt-4">
            <button className="btn Load-More " onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
        {visibleCount > 6 && (
          <div className="text-center mt-2">
            <button className="btn Load-More " onClick={loadLess}>
              Load Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
