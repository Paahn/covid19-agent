import React, { useState } from "react";
import { 
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'Canada', 'Germany', 'Zimbabwe'
  ]);

  useEffect(() => {
    // the code inside here will run once
    // when the component loads and when the
    // countries change
  }, [countries])

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid 19 Agent</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              )
                )
            }
            {/* <MenuItem value="Worldwide">Worldwide</MenuItem>
            <MenuItem value="Worldwide">1</MenuItem>
            <MenuItem value="Worldwide">2</MenuItem> */}
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
