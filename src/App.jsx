import World from "./components/World.jsx";
import Tracker from "./components/Tracker.jsx";

function App() {
  // Create checklist on left and tracker on right
  return (
    <div>
      <div className="checklist">
        <World></World>
      </div>
      <div className="tracker">
        <Tracker></Tracker>
      </div>
    </div>
  );
}

export default App;
