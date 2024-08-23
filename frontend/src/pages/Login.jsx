import { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login({ onAuthenticate, handleUserId }) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const validateUsername = (username) => {
        return username.endsWith("cuny.edu");
    };

    const handleSignUp = async () => {
        if (!username) {
            alert("Email is required");

            return;
        }

        if (!validateUsername(username)) {
            alert("Email must end with cuny.edu");
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
                const userId = await response.json();
                onAuthenticate();
                handleUserId(userId);
                navigate("/");
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
            alert("Email is required");

            return;
        }

        if (!validateUsername(username)) {
            alert("Email must end with cuny.edu");
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
                handleUserId(userId);
                navigate("/");
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
        <>
            <NavBar title="Login / Sign Up" but1="Home" but2="About" />
            <div className="relative h-[75vh] bg-primary flex flex-row items-center justify-center">
                <div className="text-center border-2 border border-black rounded-md overflow-hidden bg-white h-[40%] w-[40%] p-4 flex flex-col justify-around items-center">
                    <div className="w-full flex pt-7 flex-col items-center">
                        <input
                            className="w-[60%] rounded-md p-2 bg-gray-300 text-black placeholder-black"
                            type="email"
                            placeholder="Enter your cuny email..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
            <Footer />
        </>
    );
}
