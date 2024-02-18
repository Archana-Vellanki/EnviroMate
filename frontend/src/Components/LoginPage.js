import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./LandingPage";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((response) => {
        navigate("/landing");
        setMessage(response.data.message);
        setIsLoggedIn(true);
        console.log("Response from server:", response);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.log("Response from server:", error);
        console.error("Error logging in:", error);
      });
  };
  return (
    <div>
      {isLoggedIn ? (
        <LandingPage />
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>{message}</p>{" "}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
