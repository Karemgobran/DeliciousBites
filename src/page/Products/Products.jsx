import React, { useState, useEffect } from "react";
import "./Products.scss";
import productsData from "../../data/featuredproducts.json";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/Title/Title";

function Products() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  useEffect(() => {
    setVisibleCount(5);
  }, [filter]);

  const filteredProducts =
    filter === "All"
      ? productsData
      : productsData.filter((product) => product.category === filter);

  function handleButtonClick() {
    if (visibleCount < filteredProducts.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(5);
    }
  }

  return (
    <div className="products-page">
      <div data-aos="fade-down">
        <Title
          title="Our Products"
          description="Discover our selection of premium food and beverage products, crafted with care using the finest ingredients."
        />
      </div>

      <div className="products-nav" data-aos="fade-up">
        <div className="container">
          <div className="nav-buttons d-flex justify-content-center align-items-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={filter === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container row">
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <div
              className="col-md-4 mt-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <ProductCard product={product} />
            </div>
          ))}

          {filteredProducts.length > 5 && (
            <div className="text-center mt-4" data-aos="fade-up">
              <button className="btn Load-More" onClick={handleButtonClick}>
                {visibleCount < filteredProducts.length
                  ? "Load More"
                  : "Load Less"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
