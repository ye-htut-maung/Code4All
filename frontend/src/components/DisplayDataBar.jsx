

export default function DisplayDataBar({ id, name, location, contact, hours, note, links, boroughs }) {

    return (
        <div className="flex-col mt-6 p-4 mb-8 text-white items-center justify-between flex rounded-md mx-auto max-w-4xl border-black border-1 h-30 bg-blue-900">
            <div className="flex items-center justify-between space-x-5">
                <h1 className="font-bold">{name}</h1>
                <div>
                    <h1>{location}</h1>
                </div>
                <div>
                    <h1>{hours}</h1>
                </div>
                <h1>{contact}</h1>
                <a href={links} className="hover:text-red-500">Learn More</a>
            </div>
        </div>
    )
}