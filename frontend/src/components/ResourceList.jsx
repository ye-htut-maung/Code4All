import location from "./img/location.svg"
import resource from "./img/resource.svg"

export default function ResourceList(){

    return <div>
        <h1 className="text-center h-100 text-4xl font-bold justify-center text-blue-900">Find Your Resources</h1>
        <div className="mt-6 bg-gray-300 p-4 items-center justify-between flex rounded-md mx-auto max-w-2xl border border-black border-2">
            <label htmlFor="filter" className="block font-bold text-black pl-2 font-medium">Filter:</label>

            <img src={location} className="h-6 ml-10"></img>
            <select className="bg-gray-300 rounded-md border-2 p-1 border-black w-40"id="filter">
                <option value="" disabled selected>Location</option>
                <option>Queens</option>
                <option>Manhattan</option>
                <option>Brooklyn</option>
                <option>Staten Island</option>
                <option>Bronx</option>
            </select>

            <img src={resource} className="h-7 ml-12"></img>
            <select className="bg-gray-300 rounded-md border-2 p-1 border-black w-40" id="filter">
                <option value="" disabled selected>Resource Type</option>
                <option>Housing</option>
                <option>Food</option>
                <option>Mental Health</option>
                <option>Child Care</option>
            </select>

            <button className="text-blue-900 font-bold pr-2">Search</button>

        </div>
    </div>
}