import { useEffect, useState } from "react";
import "./App.css";
import LandingView from "./components/LandingView";
import NavBar from "./components/NavBar";
import ResourceList from "./components/ResourceList";
import DisplayDataBar from "./components/DisplayDataBar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // track authentication state to show/hide login component
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route
          path="/login"
          element={<Login onAuthenticate={() => setIsAuthenticated(true)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
