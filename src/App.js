import React, { useState, useEffect } from "react";
import { 
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent
} from "@material-ui/core";
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import LineGraph from './LineGraph';
import { sortData } from './helper';
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796
  });
  const [mapZoom, setMapZoom] = useState(3);

  // this useEffect runs once the app first loads, and never again
  // it fixes the problem where the call doesnt execute at first
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])

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
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryAbbreviation = event.target.value;
    setCountry(countryAbbreviation);

    const url = countryAbbreviation === "worldwide" 
    ? "https://disease.sh/v3/covid-19/all" 
    : `https://disease.sh/v3/covid-19/countries/${countryAbbreviation}`;

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryAbbreviation);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    })
  };
  

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid 19 Agent</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.abbreviation}>{country.name}</MenuItem>
                )
                  )
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        <Map
          center={mapCenter}
          zoom={mapZoom}
        ></Map>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph />
        </CardContent>
      </Card> 
    </div>
  );
}

export default App;
