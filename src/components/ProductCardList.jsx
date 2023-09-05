import axios from "axios";
import { useState,useEffect } from "react";

import ProductCard from "./ProductCard";

function ProductCardList() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8888/product/get")
      .then((res) => {
        console.log(res.data.data);
        setAllProducts(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
          {
            allProducts.map((product,index)=>(
              <div className="col-3" key={index}>
              <ProductCard  product={product} />
              </div>
            ))
          }
        </div>
      </div>
  );
}

export default ProductCardList;
