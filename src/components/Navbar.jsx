import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../find.png";

const Navbar = ({ setSearchQuery, setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    setSearchQuery(inputValue);
  };
  const handleCategoryChange = (newCat) => {
    setSearchQuery("");
    setCategory(newCat);
    setInputValue("");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News First
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <button
                  className="nav-link active bg-transparent border-0 "
                  aria-current="page"
                  onClick={() => {
                    handleCategoryChange("general");
                  }}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("business");
                  }}
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("entertainment");
                  }}
                >
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("sports");
                  }}
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("health");
                  }}
                >
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("technology");
                  }}
                >
                  Technology
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    handleCategoryChange("science");
                  }}
                >
                  Science
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                value={inputValue}
                aria-label="Search"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button className="btn btn-outline-dark" onClick={handleClick}>
                <img src={search} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
