import { useState } from "react";


export default function Login({ onAuthenticate }) {

  const [username, setUsername] = useState("");

  const handleSignUp = async () => {
    if (!username) {
      alert("Username is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        console.log("Register successful");
        onAuthenticate();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user");
    }
  };

  const handleLogin = async () => {
    if (!username) {
      alert("Username is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        console.log("Login successful");
        const userId = await response.json();
        onAuthenticate();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      alert("Error logging in user");
    }
  };

  return (
    <div className="relative h-[85vh] bg-primary flex flex-row items-center justify-center">
      <div className="text-center border-4 border border-black rounded-md overflow-hidden bg-white h-[65%] w-[40%] p-4 flex flex-col justify-around items-center">
        <div className="w-full flex flex-col items-center">
          <input
            className="w-[70%] rounded-md p-2 bg-gray-300 text-black placeholder-black"
            type="text"
            placeholder="Enter email address..."
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="text-blue-900 bg-white font-bold p-2 rounded-md justify-around text-center">
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
