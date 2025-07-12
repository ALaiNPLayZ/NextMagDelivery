"use client";
import { useEffect, useState } from "react";

export default function PredictionList({ userId }: { userId: string }) {
  const [predictions, setPredictions] = useState<any[]>([]);
  // useEffect(() => {
  //   fetch("/api/predictionQueue?userId=" + userId)
  //     .then((res) => res.json())
  //     .then((data) => setPredictions(data.dbQueue || []));
  // }, [userId]);
  if (!userId)
    return (
      <div
        style={{
          color: "var(--gray-400)",
          fontStyle: "italic",
          margin: "1rem 0",
        }}
      >
        Enter userId to see predictions.
      </div>
    );
  return (
    <div>
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "0.7rem",
        }}
      >
        Predicted Items
      </h3>
      <div
        style={{
          background: "var(--gray-100)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: "1.1rem 1rem",
          marginBottom: 16,
          color: "var(--gray-700)",
          fontSize: 14,
          boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        }}
      >
        <strong style={{ color: "var(--gray-700)" }}>AI Feature Preview</strong>
        <br />
        <span style={{ color: "var(--gray-500)" }}>
          This section will eventually use a production-grade AI/ML model to
          generate personalized product recommendations based on your order
          history, feedback, and behavioral data.
        </span>
        <br />
        <strong style={{ color: "var(--gray-500)" }}>
          Planned technical details:
        </strong>
        <ul
          style={{
            margin: "4px 0 0 16px",
            color: "var(--gray-400)",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <li>
            Integration with a Python-based ML microservice (via REST/gRPC)
          </li>
          <li>Real-time feature extraction and user profiling</li>
          <li>Model versioning and A/B testing</li>
          <li>Caching and queueing with Redis for performance</li>
          <li>Monitoring and explainability dashboards</li>
        </ul>
        <em
          style={{ color: "var(--gray-400)", marginTop: 8, display: "block" }}
        >
          Current status: The recommendations shown here are generated using
          simple rule-based logic as a placeholder.
        </em>
      </div>
      {/* 
      <ul>
        {predictions.map((p: any) => (
          <li key={p.id}>
            {p.productId} (Confidence: {p.confidence})
          </li>
        ))}
      </ul> */}
    </div>
  );
}
