import React, { useState, useEffect } from "react";
import items from "../data/items.js";
import hints from "../data/hints.js";
import locations from "../data/hint-locations.js";

/*
TODO:
- tooltips
- increment and decrement items
*/

function Tracker() {
  const [imageStyles, setImageStyles] = useState({});
  const [inputValues, setInputValues] = useState(hints.map(() => ""));
  const [suggestions, setSuggestions] = useState(hints.map(() => []));

  // Initialize image styles from items.js
  useEffect(() => {
    const initialStyles = {};
    items.forEach(({ id, opacity, filter }) => {
      initialStyles[id] = { opacity, filter };
    });
    setImageStyles(initialStyles);
  }, []);

  // Toggle styling of items in the tracker when clicked
  function handleOpacityToggle(event) {
    const { id } = event.target;
    const isLeftClick = event.button === 0; // left click
    const isRightClick = event.button === 2; // right click

    if (isLeftClick) {
      setImageStyles((prevStyles) => ({
        ...prevStyles,
        [id]: {
          opacity: prevStyles[id] && prevStyles[id].opacity === 1 ? 0.5 : 1,
          filter:
            prevStyles[id] && prevStyles[id].opacity === 1
              ? "grayscale(75%)"
              : "none",
        },
      }));
    } else if (isRightClick) {
      setImageStyles((prevStyles) => ({
        ...prevStyles,
        [id]: {
          opacity: prevStyles[id] && prevStyles[id].opacity === 1 ? 0.5 : 0.5,
          filter:
            prevStyles[id] && prevStyles[id].opacity === 0.5
              ? "grayscale(75%)"
              : "grayscale(75%)",
        },
      }));
      event.preventDefault(); // Prevent the context menu from appearing
    }
  }

  // Make drop down suggestions for hint input boxes
  function handleInputChange(event, index) {
    const { value } = event.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // Clear suggestions when input value is empty
    if (value.trim() === "") {
      const newSuggestions = [...suggestions];
      newSuggestions[index] = [];
      setSuggestions(newSuggestions);
    } else {
      // Filter suggestions based on input value
      const filteredSuggestions = locations.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      const newSuggestions = [...suggestions];
      newSuggestions[index] = filteredSuggestions;
      setSuggestions(newSuggestions);
    }
  }

  // Select suggestion from drop down
  function handleSuggestionClick(suggestion, index) {
    const newInputValues = [...inputValues];
    newInputValues[index] = suggestion;
    setInputValues(newInputValues);
    const newSuggestions = [...suggestions];
    newSuggestions[index] = [];
    setSuggestions(newSuggestions); // Clear suggestions when a suggestion is clicked
  }

  // Limit tracker to 6 columns
  const rows = [];
  for (let i = 0; i < items.length; i += 6) {
    rows.push(items.slice(i, i + 6));
  }

  // Create item tracker and hint table
  return (
    <div className="tracker">
      <div>
        <table>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map(({ id, src, max }) => (
                <td className="tracker-item" key={id}>
                  <img
                    id={id}
                    style={imageStyles[id]}
                    src={src}
                    onMouseDown={handleOpacityToggle}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <span className="count">{max}</span>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <hr></hr>
      <div className="hints">
        {hints.map((hint, index) => (
          <div className="hint-item" key={hint.id}>
            <img src={hint.src} alt={hint.id} />
            <input
              type="text"
              value={inputValues[index]}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Location"
            />
            <ul>
              {suggestions[index].map((suggestion, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => handleSuggestionClick(suggestion, index)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracker;
