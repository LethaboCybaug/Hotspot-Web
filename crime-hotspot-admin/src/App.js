import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resolved from "./pages/Resolved";
import Alerts from "./pages/Alerts";
import "./App.css";
import GoogleMap from "./pages/GoogleMap";  // Import your GoogleMap component
import "./App.css";

const locations = [
  { lat: -25.746111, lng: 28.188056, name: "Pretoria" },
  { lat: -26.204444, lng: 28.045556, name: "Johannesburg" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resolved" element={<Resolved />} />
        <Route path="/alerts" element={<Alerts />} />

        {/* New route for Google Maps */}
        <Route path="/map" element={<GoogleMap locations={locations} />} />
      </Routes>
    </Router>
  );
}

export default App;
