
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showBackdrop, setShowBackdrop] = useState(false);
  
  
  const handleLogin = () => {
    // Show backdrop while making the request
    setShowBackdrop(true);

    axios
      .post("http://localhost:5000/login", { username, password })
      .then((response) => {
        setMessage(response.data.message);
        console.log("Response from server:", response);
      })
      .catch((error) => {
        console.log("Response from server:", error);
        console.error("Error logging in:", error);
      })
      .finally(() => {
        // Hide backdrop after request is complete
        setShowBackdrop(false);
      });
  };

  return (
    <div className="app-container">
      {/* Backdrop */}
      {showBackdrop && <div className="backdrop"></div>}

      <div className="login-form">
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
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

