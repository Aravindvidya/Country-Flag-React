import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error to fetch the data of countries :", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <div className="countries-list">
        {countries.map((country) => (
          <div key={country.cca3} className="country">
            <img src={country.flags.svg} alt={`Flag of ${country.name}`} />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
