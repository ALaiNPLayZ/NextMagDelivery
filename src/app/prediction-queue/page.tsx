"use client";
import { useState } from "react";
import PredictionList from "../components/PredictionList";

export default function PredictionQueuePage() {
  const [userId, setUserId] = useState("u1");

  return (
    <div style={{ padding: 24 }}>
      <h1>Prediction Queue</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <PredictionList userId={userId} />
    </div>
  );
}
