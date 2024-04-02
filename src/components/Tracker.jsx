import React, { useState, useEffect } from "react";
import items from "../data/items.js";
import Hints from "./Hints.jsx";

/*
TODO:
- increment and decrement items
*/

function Tracker() {
  const [imageStyles, setImageStyles] = useState({});
  const [tooltipId, setTooltipId] = useState(null);

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

  // Limit tracker to 6 columns
  const rows = [];
  for (let i = 0; i < items.length; i += 6) {
    rows.push(items.slice(i, i + 6));
  }

  // Open popout window for hints
  function handleOpenPopout() {
    window.open(
      "/hints",
      "_blank",
      "toolbar=no,resizeable=yes,width=275,height=625"
    );
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
                    onMouseEnter={() => setTooltipId(id)}
                    onMouseLeave={() => setTooltipId(null)}
                  />
                  <span className="count">{max}</span>
                  {tooltipId === id && <div className="tooltip">{id}</div>}{" "}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <hr></hr>
      <div>{<Hints></Hints>}</div>
      <button className="popout-button" onClick={handleOpenPopout}>
        Popout Hints
      </button>
    </div>
  );
}

export default Tracker;
