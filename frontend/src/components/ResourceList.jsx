import React, { useState } from "react";
import DisplayDataBar from "./DisplayDataBar";
import locationIcon from "./img/location.svg";
import resourceIcon from "./img/resource.svg";
import axios from 'axios';
import MapView from "./MapView";

const geocoderapi = import.meta.env.VITE_GEOCODER_API;

const geocodeAddress = async (address) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address,
          key: geocoderapi
        }
      });
      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        return { lat, lng };
      } else {
        throw new Error("No results found");
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

export default function ResourceList() {
    const [selectedBorough, setselectedBorough] = useState("");
    const [selectedResource, setSelectedResource] = useState("");
    const [data, setData] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
        if (!selectedBorough || !selectedResource) {
            alert("Please select a location and resource type");
            return;
        }
        console.log(selectedBorough);
        try {
            const response = await fetch('http://localhost:3000/api/resource-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    boroughs: selectedBorough,
                    type: selectedResource,
                }),
            });
            if (!response.ok) {
                throw new Error(`An error occurred with network response: ${response.status}`);
            }
            const data = await response.json();
            //setData(data);
            setHasSearched(true);
            console.log("search results:", data);

            const geocodedData = await Promise.all(data.map(async (item) => {
                const location = await geocodeAddress(item.location);
                return {
                  ...item,
                  latitude: location ? location.lat : null,
                  longitude: location ? location.lng : null,
                };
            }));

            setData(geocodedData);
            
        }
        catch (err) {
            console.error(err);
            alert("An error occurred while fetching resource details");
            setHasSearched(true);
        }
    };

    const locations = data
    .filter(loc => loc.latitude && loc.longitude)
    .map(row => ({
      id: row.id,
      name: row.name,
      latitude: row.latitude,
      longitude: row.longitude,
    }));

    return (
        <div className="flex mt-8 mb-8">
            <div className="flex-col mt-8 mb-8">
                <h1 className="text-center h-100 text-4xl font-bold justify-center text-blue-900">Find Your Resources</h1>
                <div className="mt-6 bg-gray-300 p-4 items-center justify-between flex rounded-md mx-auto max-w-2xl border-black border-2">
                    <label htmlFor="filter" className="block font-bold text-black pl-2">Filter:</label>

                    <img src={locationIcon} className="h-6 ml-10" alt="Location Icon" />
                    <select
                        className="bg-gray-300 rounded-md border-2 p-1 border-black w-40"
                        id="location-filter"
                        value={selectedBorough}
                        onChange={(e) => setselectedBorough(e.target.value)}
                    >
                        <option value="">Location</option>
                        <option value="Queens">Queens</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Staten Island">Staten Island</option>
                        <option value="Bronx">Bronx</option>
                    </select>

                    <img src={resourceIcon} className="h-7 ml-12" alt="Resource Icon" />
                    <select
                        className="bg-gray-300 rounded-md border-2 p-1 border-black w-40"
                        id="resource-filter"
                        value={selectedResource}
                        onChange={(e) => setSelectedResource(e.target.value)}
                    >
                        <option value="">Resource Type</option>
                        <option value="housing">Housing</option>
                        <option value="food">Food</option>
                        <option value="consultation">Consultation</option>
                    </select>

                    <button className="text-blue-900 font-bold pr-2" onClick={handleSearch}>Search</button>
                </div>
                <div>
                    {hasSearched && data.length === 0 && (
                        <p className="text-center mt-4">No results found. Please try a different search.</p>
                    )}
                    {data.map((row) => (
                        <DisplayDataBar
                            key={row.id}
                            name={row.name}
                            location={row.location}
                            contact={row.contact}
                            hours={row.hours}
                            note={row.note} 
                            links={row.links}
                            boroughs={row.boroughs}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2">
                <MapView locations={locations} />
            </div>
        </div>
    );
}