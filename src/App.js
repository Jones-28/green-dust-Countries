import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CountryCards = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetching country data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {countries.map((country, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card">
              <img
                src={country.flags.svg || country.flags.png}
                alt={`${country.name.common} Flag`}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCards;
