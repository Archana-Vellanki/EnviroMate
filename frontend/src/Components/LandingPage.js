import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewActivityFormPage from "./NewActivityFormPage";

function LandingPage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    // Simulate logout logic
    setIsLoggedIn(false);
    setActivities([]);
  };
  const handleCreateActivity = () => {
    navigate("/new-activity");
    setIsCreateClicked(true);
    // setActivities([...activities, newActivity]);
    // setNewActivity(newActivity);
  };
  return (
    <div>
      {isCreateClicked ? (
        <NewActivityFormPage />
      ) : (
        <div>
          <h1>Landing Page</h1>
          <h2>Activities</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <div>
            <button onClick={handleCreateActivity}>Create New Activity</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
