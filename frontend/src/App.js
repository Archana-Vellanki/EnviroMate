import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import LandingPage from "./Components/LandingPage";
import NewActivityFormPage from "./Components/NewActivityFormPage";

function App() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/new-activity" element={<NewActivityFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
