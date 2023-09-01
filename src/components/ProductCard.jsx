import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";


function ProductCard({product}) {
  return (
    <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/product/detail" className="product-title">
                  {product.name}
                </Link>
              </h5>
              <p className="card-text">Rs. {product.price}</p>
              <AddToCartButton />
            </div>
          </div>
  );
}
  ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default ProductCard;
