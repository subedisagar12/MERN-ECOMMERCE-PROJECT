import React from "react";
import ProductCard from "./ProductCard";

function ProductCardList() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductCardList;
