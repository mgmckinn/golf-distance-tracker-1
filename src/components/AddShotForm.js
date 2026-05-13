/** @format */

import React, { useState } from "react";

const clubs = [
  "Driver",
  "3 Wood",
  "5 Wood",
  "3 Iron",
  "4 Iron",
  "5 Iron",
  "6 Iron",
  "7 Iron",
  "8 Iron",
  "9 Iron",
  "PW",
  "GW",
  "SW",
  "LW",
];

const shotTypes = ["Normal", "Stinger", "Flop", "Punch", "Knockdown"];

export default function AddShotForm({ addShot }) {
  const [club, setClub] = useState("Driver");
  const [distance, setDistance] = useState("");
  const [shotType, setShotType] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!distance) return;

    addShot({ club, distance: Number(distance), shotType });
    setDistance("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Shot</h2>

      <label>Club</label>
      <select value={club} onChange={(e) => setClub(e.target.value)}>
        {clubs.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <label>Distance (yards)</label>
      <input
        type='number'
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <label>Shot Type</label>
      <select value={shotType} onChange={(e) => setShotType(e.target.value)}>
        {shotTypes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button type='submit'>Add Shot</button>
    </form>
  );
}
