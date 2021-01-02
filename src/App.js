import React from "react";
import { 
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Covid 19 Agent</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="Worldwide">Worldwide</MenuItem>
          <MenuItem value="Worldwide">1</MenuItem>
          <MenuItem value="Worldwide">2</MenuItem>
        </Select>
      </FormControl>
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
