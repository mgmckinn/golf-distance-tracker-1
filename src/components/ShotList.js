/** @format */

import React from "react";

export default function ShotList({ shots }) {
  return (
    <>
      <h2>Shot History</h2>
      {shots.length === 0 && <p>No shots recorded</p>}

      {shots.map((s, i) => (
        <p key={i}>
          <strong>{s.club}</strong> — {s.distance} yds ({s.shotType})
        </p>
      ))}
    </>
  );
}
