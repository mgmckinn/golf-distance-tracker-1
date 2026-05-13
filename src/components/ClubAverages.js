/** @format */

import React from "react";

export default function ClubAverages({ shots }) {
  const grouped = shots.reduce((acc, shot) => {
    if (!acc[shot.club]) acc[shot.club] = [];
    acc[shot.club].push(shot.distance);
    return acc;
  }, {});

  const averages = Object.entries(grouped).map(([club, distances]) => ({
    club,
    avg: (distances.reduce((a, b) => a + b, 0) / distances.length).toFixed(1),
  }));

  return (
    <>
      <h2>Club Averages</h2>
      {averages.length === 0 && <p>No shots yet</p>}
      {averages.map((a) => (
        <p key={a.club}>
          <strong>{a.club}</strong>: {a.avg} yds
        </p>
      ))}
    </>
  );
}
