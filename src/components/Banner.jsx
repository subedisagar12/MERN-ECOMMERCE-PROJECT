import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [allBanner, setBanner] = useState([]);

  const fetchBanner = () => {
    axios({
      url: "http://localhost:8888/banner/all",
      method: "GET",
    })
      .then((res) => {
        setBanner(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {allBanner
            .filter((banner) => banner.is_featured)
            .map((banner, index) => (
              <div
                key={banner._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={banner.image}
                  className="d-block w-100"
                  alt={banner.title}
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Banner;
