import React, { useState, useContext, useEffect } from "react";
import data from "../data/checks.js";
import { WorldContext } from "./World.jsx";

function Location() {
  // Import current world information
  const world = useContext(WorldContext);

  const [selected, setSelected] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [enableMultiSelection, setEnableMultiSelection] = useState(true);
  const [multiple, setMultiple] = useState([]);
  const [count, setCount] = useState(0);
  const [sectionCheckedStatus, setSectionCheckedStatus] = useState({});

  // Single selection function for sections (Not using)
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Multi selection function for sections (default)
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentID === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentID, 1);

    setMultiple(cpyMultiple);
  }

  // Check/uncheck box and increment/decrement total check count
  function handleChange(event) {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });

    if (checked) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  // Apply styles to different check types
  function colorStyle(checkName) {
    if (checkedItems[checkName]) {
      return "darkslategrey";
    } else {
      switch (true) {
        case checkName.includes("Red Trinity"):
          return "red";
        case checkName.includes("Blue Trinity"):
          return "royalblue";
        case checkName.includes("Green Trinity"):
          return "lawngreen";
        case checkName.includes("Yellow Trinity"):
          return "yellow";
        case checkName.includes("White Trinity"):
          return "antiquewhite";
        case checkName.includes("Spell ("):
          return "violet";
        default:
          return "white";
      }
    }
  }

  // Update sectionCheckedStatus when checkboxes change for each section
  useEffect(() => {
    const newSectionCheckedStatus = {};
    data.forEach((dataItem) => {
      const allChecked = dataItem.checks.every((check) => checkedItems[check]);
      newSectionCheckedStatus[dataItem.id] = allChecked;
    });
    setSectionCheckedStatus(newSectionCheckedStatus);
  }, [checkedItems]);

  // Create section for each location with checklist
  return (
    <div className="wrapper">
      <p>Checked: {count}</p>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selector
      </button>
      <div className="section">
        {data.map(
          (dataItem) =>
            world === dataItem.world && (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="name"
                  style={{
                    color: sectionCheckedStatus[dataItem.id]
                      ? "darkslategrey"
                      : "inherit",
                    textDecoration: sectionCheckedStatus[dataItem.id]
                      ? "line-through"
                      : "inherit",
                  }}
                >
                  <h3>{dataItem.name}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="checks">
                        {dataItem.checks.map((check) => (
                          <li>
                            <label
                              style={{
                                textDecoration: checkedItems[check]
                                  ? "line-through"
                                  : "none",
                                color: colorStyle(check),
                              }}
                            >
                              <input
                                type="checkbox"
                                name={check}
                                checked={checkedItems[check] || false}
                                onChange={handleChange}
                                value={check}
                              ></input>
                              {check}
                            </label>
                          </li>
                        ))}{" "}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="checks">
                        {dataItem.checks.map((check) => (
                          <li>
                            <label
                              style={{
                                textDecoration: checkedItems[check]
                                  ? "line-through"
                                  : "none",
                                color: checkedItems[check] ? "red" : "white",
                              }}
                            >
                              <input
                                type="checkbox"
                                name={check}
                                checked={checkedItems[check] || false}
                                onChange={handleChange}
                                value={check}
                              ></input>
                              {check}
                            </label>
                          </li>
                        ))}{" "}
                      </div>
                    )}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Location;
