import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import AddToCartButton from "../components/AddToCart/AddToCartButton";
import BuyNow from "../components/BuyNow/BuyNow";

function ProductDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  if (!name || !price || !image) {
    return <div>Product details not found.</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img
              src={image}
              alt={name}
              style={{ width: "100%" }}
              height='250px'
              width='250px'
            />
          </div>

          <div className="col">
            <h1>{name}</h1>
            <h5>RS {price}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, distinctio sit? Temporibus dolor aspernatur asperiores
              sit natus quisquam ab deleniti quae tenetur, quos illo animi
              maxime possimus mollitia fugit voluptates, molestias adipisci
              fuga! Quas perspiciatis autem in amet ratione incidunt expedita
              repudiandae sequi, rem, perferendis a suscipit optio, nisi
              debitis!
            </p>

            <Counter />
            <div>
              <AddToCartButton  /> 
              <Link to={`/checkout/detail?name=${name}&price=${price}&image=${image}`}>
                <BuyNow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
