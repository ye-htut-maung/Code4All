//import cunyLogo from "./img/cunyLogo.jpg"
export default function NavBar(){

    return <nav>
        <div className="container mx-auto flex items-center justify-between mt-8">
            
            <h1 className="font-bold flex items-center justify-center h-100 text-4xl text-blue-900">Student Resources</h1>
            <div className="flex space-x-4">
                <button className="bg-white font-bold text-lg text-blue-900 h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">About</button>
                <button className="bg-white font-bold text-lg text-blue-900 h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
            </div>
        </div>
    </nav>
}