import { HashRouter as Router, Route, Routes } from "react-router-dom";
import World from "./components/World.jsx";
import Tracker from "./components/Tracker.jsx";
import Home from "./components/Home.jsx";
import Hints from "./components/Hints.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world" element={<World />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/hints" element={<Hints />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
