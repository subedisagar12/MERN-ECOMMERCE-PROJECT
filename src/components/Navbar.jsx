import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [allCategory, setAllCategory] = useState([]);

  const fetchCategory = () => {
    axios({
      url: "http://localhost:8888/category/all",
      method: "GET",
    })
      .then((res) => {
        setAllCategory(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  //removed 

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {allCategory?.map((item) => (
                    <li key={item?._id}>
                      <a className="dropdown-item" href="#">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <form className="d-flex flex-grow-1 align-items-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ color: "#24183a", borderRadius: "30px" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i> My Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  <i
                    className="fa-solid fa-user"
                    style={{
                      color: "#8c8c89",
                      backgroundColor: "#d9d7d2",
                      borderRadius: "20px",
                      border: "1px #d9d7d2",
                      padding: "5px",
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  <i
                    className="fa-solid fa-user-plus"
                    style={{
                      color: "#8c8c89",
                      backgroundColor: "#d9d7d2",
                      borderRadius: "20px",
                      border: "1px #d9d7d2",
                      padding: "5px",
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
