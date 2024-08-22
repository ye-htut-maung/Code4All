import React, { useState } from "react";
import locationIcon from "./img/location.svg";
import resourceIcon from "./img/resource.svg";

export default function ResourceList() {
    const [selectedBorough, setselectedBorough] = useState("");
    const [selectedResource, setSelectedResource] = useState("");

    const handleSearch = async () => {
        if (!selectedBorough || !selectedResource) {
            alert("Please select a location and resource type");
            return;
        }
        console.log(selectedBorough);
        try {
            const response = await fetch('http://localhost:5000/api/resource-details', {
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
            console.log("search results:", data);
        }
        catch (err) {
            console.error(err);
            alert("An error occurred while fetching resource details");
        }
    };

    return (
        <div className="flex-col">
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
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Child Care">Child Care</option>
                </select>

                <button className="text-blue-900 font-bold pr-2" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}