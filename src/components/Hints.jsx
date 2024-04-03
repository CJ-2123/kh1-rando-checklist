import React, { useState } from "react";
import hints from "../data/hints.js";
import locations from "../data/hint-locations.js";

function Hints() {
  const [inputValues, setInputValues] = useState(hints.map(() => ""));
  const [suggestions, setSuggestions] = useState(hints.map(() => []));
  const [tooltipId, setTooltipId] = useState(null);
  const [activeSuggestion, setActiveSuggestion] = useState(null);

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

  // Arrow keys for suggestions
  function handleKeyDown(event, index) {
    const newSuggestions = [...suggestions];
    const suggestionCount = newSuggestions[index]?.length || 0;

    switch (event.key) {
      case "ArrowDown":
        setActiveSuggestion((prev) =>
          prev === null ? 0 : (prev + 1) % suggestionCount
        );
        break;
      case "ArrowUp":
        setActiveSuggestion((prev) =>
          prev === null
            ? suggestionCount - 1
            : (prev - 1 + suggestionCount) % suggestionCount
        );
        break;
      case "Enter":
        if (activeSuggestion !== null) {
          handleSuggestionClick(newSuggestions[index][activeSuggestion], index);
          setActiveSuggestion(null);
        }
        break;
      default:
        break;
    }
  }

  // Create hint tracker
  return (
    <div className="hints">
      {hints.map((hint, index) => (
        <div className="hint-item" key={hint.id}>
          <img
            src={hint.src}
            alt={hint.id}
            onMouseEnter={() => setTooltipId(hint.id)}
            onMouseLeave={() => setTooltipId(null)}
          />{" "}
          {tooltipId === hint.id && <div className="tooltip">{hint.id}</div>}
          <input
            type="text"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Location"
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
          <ul>
            {suggestions[index]?.map((suggestion, subIndex) => (
              <li
                key={subIndex}
                className={activeSuggestion === subIndex ? "active" : ""}
                onClick={() => handleSuggestionClick(suggestion, index)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Hints;
