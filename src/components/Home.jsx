import World from "./World.jsx";
import Tracker from "./Tracker.jsx";

function Home() {
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

export default Home;
