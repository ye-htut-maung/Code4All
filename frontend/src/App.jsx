import { useEffect, useState } from "react";
import "./App.css";
import LandingView from "./components/LandingView";
import NavBar from "./components/NavBar";
import ResourceList from "./components/ResourceList";
import DisplayDataBar from "./components/DisplayDataBar";
import Login from "./components/Login";

function App() {
  // track authentication state to show/hide login component
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  /*const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  /*useEffect(() => {
    const api = import.meta.env.VITE_API;
    fetch(`${api}/`)
      .then(async (res) => {
        if (res.ok) {
          setData(await res.json()); // fixed join() to json()
          setLoading(false);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);*/

  return (
    <>
      <NavBar />
      <LandingView />
      <ResourceList />
      {!isAuthenticated && (
        <Login onAuthenticate={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
