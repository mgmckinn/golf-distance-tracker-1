/** @format */

import React, { useState, useEffect } from "react";
import AddShotForm from "./components/AddShotForm";
import ClubAverages from "./components/ClubAverages";
import ShotList from "./components/ShotList";
import "./App.css";

function App() {
  const [shots, setShots] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("golfShots");
    if (saved) setShots(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("golfShots", JSON.stringify(shots));
  }, [shots]);

  const addShot = (shot) => {
    setShots([...shots, shot]);
  };

  return (
    <div className='container'>
      <h1>🏌️‍♂️ Golf Distance Tracker</h1>

      <div className='card'>
        <AddShotForm addShot={addShot} />
      </div>

      <div className='card'>
        <ClubAverages shots={shots} />
      </div>

      <div className='card'>
        <ShotList shots={shots} />
      </div>
    </div>
  );
}

export default App;
