import React, { useState, useEffect } from "react";
import { 
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            abbreviation: country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])

  const  onCountryChange = (event) => {
    const countryAbbreviation = event.target.value;
    setCountry(countryAbbreviation);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid 19 Agent</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.abbreviation}>{country.name}</MenuItem>
              )
                )
            }
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + select input dropdown field */}
      {/* Infobox*/}
      {/* Infobox*/}
      {/* Infobox*/}
      {/* Infobox*/}
      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
