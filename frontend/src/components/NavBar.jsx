import { Link } from "react-router-dom";
import cunyLogo from "./img/cunyLogo.jpg";
export default function NavBar({ title, but1, but2 }) {
  return (
    <nav className="p-4">
      <div className="container flex mt-6 font-bold items-center justify-between h-16 mx-auto max-w-7xl text-blue-900">
        <div className="flex-none">
          <a href="https://www.cuny.edu/">
            <img src={cunyLogo} className="w-32"></img>
          </a>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <span className="ml-[80px] text-4xl">{title}</span>
        </div>
        <div className="flex-none flex gap-4">
          <Link to="/">
            <button className="h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 hover:text-white hover:ring-blue-900">
              {but1}
            </button>
          </Link>

          <Link to={but2 == "Login" ? "/login" : "/"}>
            <button className="h-10 px-6 rounded-full border-2 border-black hover:bg-blue-600 focus:outline-none focus:ring-2 hover:text-white hover:ring-blue-400">
              {but2}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
