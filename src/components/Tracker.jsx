import React, { useState, useEffect } from "react";
import items from "../data/items.js";
import Hints from "./Hints.jsx";

function Tracker() {
  const [imageStyles, setImageStyles] = useState({});
  const [tooltipId, setTooltipId] = useState(null);
  const [iconCounts, setIconCounts] = useState({});

  // Initialize item counts and styles
  useEffect(() => {
    const initialStyles = {};
    const initialCounts = {};

    items.forEach(({ id, opacity, filter }) => {
      initialStyles[id] = { opacity, filter };
      initialCounts[id] = 0;
    });

    setImageStyles(initialStyles);
    setIconCounts(initialCounts);
  }, []);

  // Toggle styling of items and incrementing/decrementing items in the tracker when clicked
  function handleOpacityToggle(event) {
    const { id } = event.target;
    const isLeftClick = event.button === 0; // left click
    const isRightClick = event.button === 2; // right click

    if (isLeftClick) {
      if (iconCounts[id] < items.find((item) => item.id === id).max) {
        // Check if count is less than max
        setImageStyles((prevStyles) => ({
          ...prevStyles,
          [id]: {
            opacity: 1,
            filter: "none",
          },
        }));
        setIconCounts((prevCounts) => ({
          ...prevCounts,
          [id]: prevCounts[id] + 1,
        }));
      }
    } else if (isRightClick && iconCounts[id] > 1) {
      // Check is count greater than 1 on decrement
      setImageStyles((prevStyles) => ({
        ...prevStyles,
        [id]: {
          opacity: 1,
          filter: "none",
        },
      }));
      setIconCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
      event.preventDefault(); // Prevent the context menu from appearing
    } else if (isRightClick && iconCounts[id] === 1) {
      // Fade image if count is 1 and decrementing
      setImageStyles((prevStyles) => ({
        ...prevStyles,
        [id]: {
          opacity: 0.5,
          filter: "grayscale(75%)",
        },
      }));
      setIconCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
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
      "#/hints",
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
                  {items.find((item) => item.id === id).max > 1 && (
                    <span className="count tracker-count">
                      {iconCounts[id] > 0 ? iconCounts[id] : ""}
                    </span>
                  )}
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
