import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    multiplier: 400,
    colorOption: {
      color: "#CC1034",
      fillColor: "#CC1034"
    }
  },
  recovered: {
    multiplier: 600,
    colorOption: {
      color: "#7dd71d",
      fillColor: "#7dd71d"
    }
  },
  deaths: {
    multiplier: 1000,
    colorOption: {
      color: "#fb4443",
      fillColor: "#fb4443"
    }
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// Draw a circle on the map to indicate data volume (for example number of cases) by
// using an interactive tooltip
export const showDataOnMap = (data, caseType='cases') =>
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={casesTypeColors[caseType].colorOption}
      radius={
        Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div 
          className="info-flag"
          style={{ backgroundImage: `url(${country.countryInfo.flag})`}}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
          <div className="info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));