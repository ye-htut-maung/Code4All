import locationIcon from "./img/location.svg"
import resourceIcon from "./img/resource.svg"
import react, { useState } from "react";

export default function ResourceList() {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedResource, setSelectedResource] = useState("");

    const handleSearch = async () => {
        if (!selectedLocation || !selectedResource) {
            alert("Please select a location and resource type");
            return;
        }
        try {
            const response = await fetch('api/resource-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: selectedLocation,
                    resourceType: selectedResource,
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

                <img src={locationIcon} className="h-6 ml-10" alt="Location Icon"></img>
                <select className="bg-gray-300 rounded-md border-2 p-1 border-black w-40"
                    id="location-filter"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e, target.e.value)}
                >
                    <option value="" disabled>Location</option>
                    <option value="Queens">Queens</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Staten Island">Staten Island</option>
                    <option value="Bronx">Bronx</option>
                </select>

                <img src={resourceIcon} className="h-7 ml-12" alt="Resource Icon"></img>
                <select className="bg-gray-300 rounded-md border-2 p-1 border-black w-40"
                    id="resource-filter"
                    value={selectedResource}
                    onChange={(e) => setSelectedResource(e, target.e.value)}
                >
                    <option value="" disabled selected>Resource Type</option>
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Child Care">Child Care</option>
                </select>

                <button className="text-blue-900 font-bold pr-2" onClick={handleSearch}>Search</button>

            </div>
        </div>
    );
};