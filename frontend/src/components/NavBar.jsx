import cunyLogo from "./img/cunyLogo.jpg"
export default function NavBar(){

    return <nav>
        <div className="container mx-auto flex items-center justify-between">
            <img src={cunyLogo} class="w-32"></img>
            <h1 className="font-bold flex items-center justify-center h-100 text-3xl text-blue-900">Student Resources</h1>
            <div className="flex space-x-4">
                <h1 className="font-bold text-blue-900">About</h1>
                <h1 className="font-bold text-blue-900">Login</h1>
            </div>
        </div>
    </nav>
}