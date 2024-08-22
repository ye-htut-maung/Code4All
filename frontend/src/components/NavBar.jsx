import cunyLogo from "./img/cunyLogo.jpg"
export default function NavBar() {

    return <nav className="p-4">
        <div className="container flex mt-8 font-bold items-center justify-between h-16 mx-auto max-w-7xl text-blue-900">
            <div className="flex-none">
                <img src={cunyLogo} className="w-32"></img>
            </div>
            <div className="flex items-center flex-1 justify-center">
                <span className="ml-[80px] text-4xl">Student Resources</span>
            </div>
            <div className="flex-none flex gap-4">
                <button className="h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">About</button>
                <button className="h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
            </div>
        </div>
    </nav>
}