import { useEffect, useState } from "react";
import "./App.css";
import LandingView from "./components/LandingView";
import NavBar from "./components/NavBar";
import ResourceList from "./components/ResourceList"

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const api = import.meta.env.VITE_API;
        fetch(`${api}/`)
            .then(async (res) => {
                if (res.ok) {
                    setData(await res.join());
                    setLoading(false);
                } else {
                    setError(true);
                }
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    return (
        <>
            <NavBar />
            <LandingView />
            <ResourceList/>
        </>
    );
}

export default App;
