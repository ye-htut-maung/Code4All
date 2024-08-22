

export default function DisplayDataBar() {

    return <div className="flex-col mt-6 p-4 mb-8 text-white items-center justify-between flex rounded-md mx-auto max-w-4xl border-black border-1 h-30 bg-blue-900">
        <div className="flex items-center justify-between space-x-20">
            <h1 className="font-bold">Queens College Food Pantry</h1>
            <div>
                <h1>123-45 67th Ave</h1>
                <h1>Flushing, NY 11365</h1>
            </div>
            <h1>123-456-7890</h1>
            <a href="#">Learn More</a>
        </div>
    </div>
}