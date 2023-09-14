import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({product}) {
  return (
    <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              height='190px'
              width='190px'
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/product/detail?name=${product.name}&price=${product.price}&image=${product.image}`}>
                  {product.name}
                </Link>
              </h5>
              <p className="card-text">Rs. {product.price}</p>
            </div>
          </div>
  );
}
  ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default ProductCard;