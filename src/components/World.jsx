import React, { createContext } from "react";
import world from "../data/worlds.js";
import Location from "./Location.jsx";

export const WorldContext = createContext();

function World() {
  // Create world box with world name and list of checks grouped by location
  return (
    <div className="wrapper">
      {world.map((world) => (
        <div
          className="item"
          //style={{backgroundColor: world.bgColor}}
        >
          <h2>{world.name}</h2>
          <hr></hr>
          <p>Total Checks: {world.totalChecks}</p>
          <WorldContext.Provider value={world.name}>
            <Location></Location>
          </WorldContext.Provider>
        </div>
      ))}
    </div>
  );
}

export default World;
