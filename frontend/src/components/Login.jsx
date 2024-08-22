export default function Login() {
  return (
    <div className="relative h-[85vh] bg-primary flex flex-row items-center justify-center">
      <div className="text-center border-4 border border-black rounded-md overflow-hidden bg-white h-[65%] w-[40%] p-4 flex flex-col justify-around items-center">
        <div className="w-full flex flex-col items-center">
          <input
            className="w-[70%] rounded-md p-2 bg-gray-300 text-black placeholder-black"
            type="text"
            placeholder="Enter email address..."
            required
          ></input>
        </div>
        <div className="w-full flex flex-col items-center">
          <input
            className="w-[70%] rounded-md p-2 bg-gray-300 text-black placeholder-black"
            type="text"
            placeholder="Enter password..."
            required
          ></input>
        </div>
        <div className="flex gap-3">
          <div className="text-blue-900 bg-white font-bold p-2 rounded-md justify-around text-center">
            <button>Login</button>
          </div>
          <div className="text-blue-900 bg-white font-bold p-2 rounded-md justify-around text-center">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
