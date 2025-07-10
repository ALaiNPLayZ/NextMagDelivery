"use client";
import { useEffect, useState } from "react";

export default function PredictionList({ userId }: { userId: string }) {
  const [predictions, setPredictions] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/predictionQueue?userId=" + userId)
      .then((res) => res.json())
      .then((data) => setPredictions(data.dbQueue || []));
  }, [userId]);
  if (!userId) return <div>Enter userId to see predictions.</div>;
  return (
    <div>
      <h3>Predicted Items</h3>
      <ul>
        {predictions.map((p: any) => (
          <li key={p.id}>
            {p.productId} (Confidence: {p.confidence})
          </li>
        ))}
      </ul>
    </div>
  );
}
