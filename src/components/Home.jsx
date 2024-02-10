import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="container">
      <div className="bg-light d-flex align-items-center justify-content-center " style={{width:"100vw"}}>
        <img
          src="src\assets\real-estate-house.png"
          style={{ width: "80px", height: "80px", marginRight: "auto" }}
          alt="Company Logo"
        />
        <h3 className="" style={{ fontSize: "14px", marginRight: "50%" }}>
          XYZ SYSTEMS LLP.
        </h3>
      </div>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Transactions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Journal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="col-md-6 mt-5  text-md-left">
      <div className="col mt-5" style={{ marginLeft: "200%" }}>
        <div>
          <img
            src="src\assets\User_icon_2.svg.png"
            style={{ width: "40px", height: "40px" }}
          />
          <h2 style={{ fontSize: "14px" }}>Josph Lazare</h2>
        </div>
      </div>
      </div>
      <section>
        <div className="row ">
          <div className="col-md-6">
            <h2>New Arrival</h2>
            <h5>
              <u>JOIN</u> TODAY
            </h5>
            <img
              src="src/assets/membership.jpg"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "250px", height: "300px" }}
            />
            <div className="row mt-3 justify-content-center justify-content-md-start">
              <button
                className="btn text-info bg-secondary mx-3"
                style={{ Radiusborder: "20px", width: "30%" }}
              >
                JOIN NOW
              </button>
            </div>
          </div>

          <div className="col">
            <h2 className="mb-4 text-success">Unlock Premium Features Now</h2>
            <Carousel indicators={false}>
              <Carousel.Item>
                <div
                  className="row justify-content-center align-items-center"
                  style={{ marginTop: "10%" }}
                >
                  <div className="col text-center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="src\assets\img1.jpg"
                        alt=""
                        style={{ width: "160px", height: "150px" }}
                      />
                      <div
                        style={{ border: "1px solid #ccc", padding: "15px" }}
                      >
                        <h3 style={{ fontSize: "14px" }}>
                          Lower Interest Rates
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="src\assets\img2.jpg"
                        alt=""
                        style={{ width: "174px", height: "150px" }}
                      />
                      <div
                        style={{ border: "1px solid #ccc", padding: "15px" }}
                      >
                        <h3 style={{ fontSize: "14px" }}>
                          Interest Free Payments
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="src\assets\img3.jpg"
                        alt=""
                        style={{ width: "174px", height: "150px" }}
                      />
                      <div
                        style={{ border: "1px solid #ccc", padding: "15px" }}
                      >
                        <h3 style={{ fontSize: "14px" }}>
                          Discount On Materials
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            <div>
              <div>
                <button
                  className="mt-3 text-white bg-success"
                  style={{
                    borderRadius: "20px",
                    width: "25%",
                    marginLeft: "38%",
                  }}
                >
                  Unlock Now
                </button>
              </div>
              <div>
                <button
                  className="mt-3 text-white bg-success"
                  style={{
                    borderRadius: "20px",
                    width: "20%",
                    marginLeft: "40%",
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
