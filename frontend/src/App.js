import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import LandingPage from "./Components/LandingPage";
import NewActivityFormPage from "./Components/NewActivityFormPage";
import EventForm from "./Components/Form";

function App() {
  //   try {
  //   const [activities, setActivities] = useState([]);
  //   const [newActivity, setNewActivity] = useState("");
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
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
}

export default App;
